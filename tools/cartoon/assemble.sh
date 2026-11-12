#!/usr/bin/env bash
# Сборка: анимация (зацикливается до длины озвучки) + голос + [музыка] + субтитры.
# assemble.sh animation.mp4 voice.wav subs.srt out.mp4 [music.mp3]
set -euo pipefail
ANIM=$1 VOICE=$2 SRT=$3 OUT=$4 MUSIC=${5:-}
D=$(soxi -D "$VOICE"); D=$(echo "$D + 0.6" | bc)
STYLE="FontName=Noto Sans,Bold=1,FontSize=13,PrimaryColour=&H00FFFFFF,OutlineColour=&H80000000,BorderStyle=1,Outline=2,Shadow=0,MarginV=40"
if [ -n "$MUSIC" ]; then
  ffmpeg -y -v error -stream_loop -1 -i "$ANIM" -i "$VOICE" -stream_loop -1 -i "$MUSIC" -t "$D" \
    -filter_complex "[2:a]volume=0.18[m];[1:a][m]amix=inputs=2:duration=first:dropout_transition=0,loudnorm=I=-16:TP=-1.5,alimiter=limit=0.84:level=false[a];[0:v]subtitles='$SRT':force_style='$STYLE'[v]" \
    -map "[v]" -map "[a]" -c:v libx264 -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k "$OUT"
else
  ffmpeg -y -v error -stream_loop -1 -i "$ANIM" -i "$VOICE" -t "$D" \
    -filter_complex "[1:a]apad,loudnorm=I=-16:TP=-1.5,alimiter=limit=0.84:level=false[a];[0:v]subtitles='$SRT':force_style='$STYLE'[v]" \
    -map "[v]" -map "[a]" -c:v libx264 -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k "$OUT"
fi
echo "Готово: $OUT ($D c)"
