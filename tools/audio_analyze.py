"""Локальный анализ звука ролика: ffprobe-проверка, извлечение, Whisper (ru), темп/биты librosa.
Запуск: /home/user/.venv-audio/bin/python tools/audio_analyze.py video.mp4 [--model small]
"""
import argparse, json, subprocess, sys, tempfile, os

def sh(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)

ap = argparse.ArgumentParser()
ap.add_argument("video"); ap.add_argument("--model", default="small")
a = ap.parse_args()

probe = json.loads(sh(["ffprobe","-v","error","-select_streams","a","-show_entries",
    "stream=index,codec_name,sample_rate,channels","-of","json",a.video]).stdout or "{}")
streams = probe.get("streams", [])
print("== Аудиодорожки:", streams or "НЕТ аудиодорожки")
if not streams: sys.exit(1)
vd = sh(["ffmpeg","-hide_banner","-i",a.video,"-map","0:a:0","-af","volumedetect","-f","null","-"]).stderr
lv = [l.split("] ")[1] for l in vd.splitlines() if "mean_volume" in l or "max_volume" in l]
print("== Уровень:", "; ".join(lv))

wav = os.path.join(tempfile.mkdtemp(), "a.wav")
sh(["ffmpeg","-y","-v","error","-i",a.video,"-vn","-ac","1","-ar","16000",wav])

from faster_whisper import WhisperModel
m = WhisperModel(a.model, device="cpu", compute_type="int8")
segs, info = m.transcribe(wav, language="ru", vad_filter=True, word_timestamps=False)
print(f"== Расшифровка (язык={info.language}, p={info.language_probability:.2f}):")
for s in segs:
    print(f"[{s.start:6.2f} – {s.end:6.2f}] {s.text.strip()}")

import librosa, numpy as np
y, sr = librosa.load(wav, sr=22050)
tempo, beats = librosa.beat.beat_track(y=y, sr=sr, units="time")
onsets = librosa.onset.onset_detect(y=y, sr=sr, units="time")
env = librosa.onset.onset_strength(y=y, sr=sr)
of = librosa.onset.onset_detect(onset_envelope=env, sr=sr)
strong = sorted(zip(env[of], librosa.frames_to_time(of, sr=sr)), reverse=True)[:8]
print(f"== Темп: {float(np.atleast_1d(tempo)[0]):.1f} BPM; битов: {len(beats)}; онсетов: {len(onsets)}")
print("== Биты (с):", ", ".join(f"{b:.2f}" for b in beats))
print("== Сильнейшие акценты (с):", ", ".join(f"{t:.2f}" for _, t in sorted(strong, key=lambda x: x[1])))
