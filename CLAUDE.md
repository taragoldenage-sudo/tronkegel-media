# Инструкция проекта tronkegel-media

## Начало каждой сессии
`bash tools/setup.sh` — ставит/проверяет весь набор (контейнер временный, установки не сохраняются).

## Звук: анализ перед монтажом (обязательно)

Перед любым монтажом ролика сначала анализировать звук:

1. **Проверить дорожку через ffprobe:**
   `ffprobe -v error -select_streams a -show_entries stream=index,codec_name,sample_rate,channels -of default=nw=1 ВИДЕО`
2. **Проверить уровень:**
   `ffmpeg -hide_banner -i ВИДЕО -map 0:a:0 -af volumedetect -f null - 2>&1 | grep -E "mean_volume|max_volume"`
3. **Извлечь звук:** `ffmpeg -y -i ВИДЕО -vn -ac 1 -ar 16000 audio.wav`
4. **Распознать речь (ru) с отметками времени:** faster-whisper, локально.
5. **Музыка:** темп (BPM), биты и сильные акценты через librosa — резать по ним.

Всё одной командой: `/home/user/.venv-audio/bin/python tools/audio_analyze.py ВИДЕО`

**Запрещено заявлять «в исходнике нет звука»** без проверки дорожки (шаг 1) и её уровня (шаг 2).
Дорожка есть, но mean_volume ниже −60 dB — это «тишина/очень тихо», а не «нет звука». Указывать фактические цифры.

### Окружение
- FFmpeg и ffprobe — системные.
- Python-компоненты — в отдельном venv `/home/user/.venv-audio` (faster-whisper, librosa). Если venv нет:
  `python3 -m venv /home/user/.venv-audio && /home/user/.venv-audio/bin/pip install faster-whisper librosa`
- Только локальная обработка, без платных API.
- faster-whisper скачивает модель с huggingface.co. Если хост закрыт сетью — сообщить прямо, расшифровку не выдумывать.

## Скилл animation-styles (анимация кодом, Remotion, без платных моделей)
- Лежит в `.claude/skills/animation-styles` (источник: github.com/deenukhan/animation-styles, MIT).
- Первый запуск в сессии: `cd .claude/skills/animation-styles && npm install`.
- В облачной сессии рендерить с `REMOTION_OFFLINE_FONTS=1`: Google Fonts и загрузка Chrome закрыты сетью.
  Используется предустановленный Chromium (см. `remotion.config.ts`), шрифты — системные заменители.
- Пример: `REMOTION_OFFLINE_FONTS=1 npm run render -- 33` → `out/33-ukiyo-e_preview.mp4`.
- Галерея превью (`media/`) не скопирована — смотреть в README исходного репозитория.

## Акварельная анимация p5.brush (бесплатно, MIT, без нейросетей)
- Шаблон: `tools/p5brush/index.html` (птицы над горами, красное солнце). Параметр `?t=0..1` — момент анимации.
- Установка: `cd tools/p5brush && npm install` (p5@2 + p5.brush@3 из npm).
- Рендер кадров: `node tools/p5brush/shot.js $(pwd)/tools/p5brush tools/p5brush/fr/f 48`
  затем `ffmpeg -framerate 12 -i tools/p5brush/fr/f_%03d.png -c:v libx264 -pix_fmt yuv420p out.mp4`.
- Скорость в облаке: ~5,5 с на кадр (WebGL программный). Для длинных роликов — меньше кадров + интерполяция.
- Стабильный фон: перед каждым элементом вызывать `randomSeed(N)` с фиксированным N.

## Мультик с озвучкой: конвейер (всё локально и бесплатно)
1. **Анимация:** p5.brush (`tools/p5brush/`) или Remotion-скилл animation-styles.
2. **Озвучка:** `python3 tools/cartoon/voiceover.py script.txt out/ --voice anna`
   - одна фраза на строку; `[aleksandr-hq] текст` — другой голос для фразы (диалоги);
   - `--rate 0.9` медленнее, `--pause 0.4` пауза между фразами;
   - женские: anna elena irina tatiana victoria arina; мужские: aleksandr-hq artemiy mikhail pavel yuriy vitaliy evgeniy-rus.
   - на выходе `voice.wav` и `subs.srt` с точными таймингами (Whisper для субтитров не нужен).
3. **Сборка:** `tools/cartoon/assemble.sh anim.mp4 out/voice.wav out/subs.srt result.mp4 [music.mp3]`
   — анимация зацикливается до длины голоса, музыка приглушается под голос, громкость −16 LUFS, пик ≤ −1,5 dB.
- RHVoice — синтез среднего качества (не нейросеть). Нейроголоса Piper/Silero требуют доступа к huggingface.co / models.silero.ai — сейчас закрыто сетью.
