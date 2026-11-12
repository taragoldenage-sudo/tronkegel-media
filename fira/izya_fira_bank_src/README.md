# Изя и Фира — «Лучший банк для бизнеса» (16:9, 19 с)

Акварельная перекладка: слои нарисованы p5.brush, анимация — Canvas2D, озвучка RHVoice, музыка сгенерирована (numpy).

Пересборка (из этой папки, после `bash tools/setup.sh`; нужен симлинк node_modules -> ../../tools/p5brush/node_modules):
1. Слои: `node render_layers.js $(pwd) bg table end izya fira izya_arm fira_arm flower donut heart`, затем `python3 dehalo.py layers/{izya,fira,izya_arm,fira_arm,flower,donut,heart}.png`
2. Кадры: `node frames.js $(pwd) all` → out/f_XXXX.jpg (≈30 с)
3. Звук: реплики RHVoice (elena — диктор; tatiana tempo 0.82 pitch +120 — Фира), тайминги в `compose.html` (объект T).

Тайминги: n1 1.0 · n2 5.0 · n3 8.4 · Фира 11.6 · слоган 15.6.
