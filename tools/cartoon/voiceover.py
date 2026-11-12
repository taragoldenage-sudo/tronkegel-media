"""Озвучка мультика локально (RHVoice, бесплатно) + субтитры с точными таймингами.
Вход: текстовый файл, одна фраза на строку. Строка вида «[irina] текст» меняет голос для фразы.
Запуск: python3 tools/cartoon/voiceover.py script.txt out_dir --voice anna --pause 0.4
Выход: out_dir/voice.wav, out_dir/subs.srt
Голоса (ru): anna elena irina tatiana victoria arina | aleksandr-hq artemiy mikhail pavel yuriy vitaliy evgeniy-rus
"""
import argparse, os, re, subprocess

ap = argparse.ArgumentParser()
ap.add_argument("script"); ap.add_argument("out")
ap.add_argument("--voice", default="anna"); ap.add_argument("--pause", type=float, default=0.4)
ap.add_argument("--rate", type=float, default=1.0, help="темп речи: 0.8 медленнее, 1.2 быстрее")
a = ap.parse_args(); os.makedirs(a.out, exist_ok=True)

def dur(p): return float(subprocess.check_output(["soxi", "-D", p]).decode())
def ts(t): h, r = divmod(t, 3600); m, s = divmod(r, 60); return f"{int(h):02}:{int(m):02}:{int(s):02},{int(round((s%1)*1000)):03}"

lines = [l.strip() for l in open(a.script, encoding="utf-8") if l.strip()]
parts, srt, t = [], [], 0.0
sil = os.path.join(a.out, "_sil.wav")
subprocess.run(["sox", "-n", "-r", "24000", "-c", "1", sil, "trim", "0", str(a.pause)], check=True)
for i, line in enumerate(lines):
    m = re.match(r"\[([\w-]+)\]\s*(.*)", line); voice, text = (m.group(1), m.group(2)) if m else (a.voice, line)
    raw, wav = os.path.join(a.out, f"_r{i}.wav"), os.path.join(a.out, f"_p{i}.wav")
    subprocess.run(["RHVoice-test", "-p", voice, "-o", raw], input=text.encode(), check=True)
    subprocess.run(["sox", raw, "-r", "24000", "-c", "1", wav, "tempo", "-s", str(a.rate)], check=True)
    d = dur(wav); srt.append(f"{i+1}\n{ts(t)} --> {ts(t+d)}\n{text}\n"); t += d + a.pause
    parts += [wav, sil]
subprocess.run(["sox", *parts, os.path.join(a.out, "voice.wav")], check=True)
open(os.path.join(a.out, "subs.srt"), "w", encoding="utf-8").write("\n".join(srt))
for f in os.listdir(a.out):
    if f.startswith("_"): os.remove(os.path.join(a.out, f))
print(f"voice.wav {t:.2f} c, фраз: {len(lines)}")
