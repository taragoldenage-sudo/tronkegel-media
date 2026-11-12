# Изя и Фира — «Лучший банк для бизнеса» (16:9, 21 с)

Акварельная перекладка: слои нарисованы p5.brush, анимация — Canvas2D, озвучка RHVoice, музыка сгенерирована (numpy).

Пересборка (из этой папки, после `bash tools/setup.sh`; нужен симлинк node_modules -> ../../tools/p5brush/node_modules):
1. Слои: `node render_layers.js $(pwd) bg table end izya fira izya_arm fira_arm flower donut heart`, затем `python3 dehalo.py layers/{izya,fira,izya_arm,fira_arm,flower,donut,heart}.png`
2. Кадры: `node frames.js $(pwd) all` → out/f_XXXX.jpg (≈30 с)
3. Звук: Изя — aleksandr-hq (tempo 0.95), Фира — irina (tempo 0.9, pitch +60).

Тайминги: Изя 1.0 · 5.6 · 9.7 · Фира 13.4 · слоган (Изя) 17.6.
