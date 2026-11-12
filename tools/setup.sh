#!/usr/bin/env bash
# Установка всего набора для мультиков с озвучкой. Идемпотентно: установленное пропускается.
# Запуск из корня репозитория: bash tools/setup.sh
set -e
need_apt=()
for p in rhvoice rhvoice-russian espeak-ng sox bc fonts-noto-core; do dpkg -s $p >/dev/null 2>&1 || need_apt+=($p); done
command -v ffmpeg >/dev/null || need_apt+=(ffmpeg)
if [ ${#need_apt[@]} -gt 0 ]; then apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get install -y -qq "${need_apt[@]}"; fi
[ -x /home/user/.venv-audio/bin/python ] || python3 -m venv /home/user/.venv-audio
/home/user/.venv-audio/bin/python -c "import faster_whisper, librosa" 2>/dev/null || /home/user/.venv-audio/bin/pip install -q faster-whisper librosa
[ -d tools/p5brush/node_modules/p5.brush ] || (cd tools/p5brush && npm install --no-audit --no-fund -s)
[ -d .claude/skills/animation-styles/node_modules/remotion ] || (cd .claude/skills/animation-styles && npm install --no-audit --no-fund -s)
mkdir -p ~/.claude/skills && ln -sfn "$(pwd)/.claude/skills/animation-styles" ~/.claude/skills/animation-styles
echo "OK: ffmpeg, RHVoice (ru), sox, librosa, faster-whisper, p5.brush, Remotion/animation-styles"
