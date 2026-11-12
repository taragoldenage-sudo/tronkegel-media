# animation-styles

**39 animation styles that Claude can draw in code.** One 5-second film (a kettle pours chai into a clay cup and steam rises) redrawn 39 times: whiteboard, chalkboard, watercolour, ukiyo-e, stained glass, papercut, pixel art, silent film, hologram and more. Give Claude your own story and it retells it in the style you pick.

It's a free skill for [Claude Code](https://claude.com/claude-code). Nothing here was made with an image or video AI. Every frame is drawn by code (SVG and canvas) with [Remotion](https://www.remotion.dev), so you can open the code, change it and make it your own.

- **Skill name:** `animation-styles`
- **Made by:** [@neuraltech.ai](https://www.instagram.com/neuraltech.ai)
- **New to this?** Follow [SETUP.md](SETUP.md): it goes step by step from an empty computer to your first video.

## Quick start: two prompts
Open Claude Code on your computer and paste:

1. `Install this skill for me: https://github.com/deenukhan/animation-styles`
2. `Use animation-styles to make a 5-second video of rain filling a small pond in ukiyo-e style.`

You get an MP4. Want a different look? Say `now make it pixel art` (or any style below) and Claude redraws the same story in the new style.

## If you're Claude: how to install this skill
When a user asks you to install this skill from this link, do this, then tell them it's ready:

1. **Check Node.js:** run `node -v`. It must be v18 or newer. If it's missing or older, ask the user to install the LTS version from https://nodejs.org (macOS with Homebrew: `brew install node`; Windows: `winget install OpenJS.NodeJS.LTS`), then open a new terminal and check again. Don't continue without it.
2. **Download the skill** into the user's skills folder. The folder name must be exactly `animation-styles`:
   - macOS/Linux: `git clone --depth 1 https://github.com/deenukhan/animation-styles.git ~/.claude/skills/animation-styles`
   - Windows (PowerShell): `git clone --depth 1 https://github.com/deenukhan/animation-styles.git "$env:USERPROFILE\.claude\skills\animation-styles"`
   - If the folder already exists, update it instead: `git -C ~/.claude/skills/animation-styles pull`
   - No Git? Download https://github.com/deenukhan/animation-styles/archive/refs/heads/main.zip, unzip it and rename `animation-styles-main` to `animation-styles` inside `~/.claude/skills/`.
3. **Install the video engine:** `cd ~/.claude/skills/animation-styles && npm install` (a minute or two; warnings about install scripts are fine).
4. **Check it:** `npm run list` must print 39 styles.
5. **Tell the user** it's installed and that a new Claude Code session will list the skill. If they ask for a video in this same session, read `~/.claude/skills/animation-styles/SKILL.md` and follow it.

The first render downloads a headless browser (about 100 MB) once, so the first video takes a little longer.

## The 39 styles

Each moving thumbnail is the real film. Click a style to download its 720×900 preview MP4, or "full size" for the 2160×2700 master. Each one is 5 seconds, silent, 4:5 (the Instagram portrait size). All the full-size files are also on the [releases page](https://github.com/deenukhan/animation-styles/releases/tag/v1.0.0).

### Drawn on a board

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/01_whiteboard.mp4?raw=true"><img src="media/thumbs/01_whiteboard.webp" width="180" alt="Whiteboard animation style"></a><br><b>01 · Whiteboard</b><br><sub>A marker hand draws black lines on a white board, then fills the cup with colour.</sub><br><sub>download: <a href="media/videos/01_whiteboard.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/01_whiteboard.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/02_chalkboard.mp4?raw=true"><img src="media/thumbs/02_chalkboard.webp" width="180" alt="Chalkboard animation style"></a><br><b>02 · Chalkboard</b><br><sub>Dusty coloured chalk on a green-black board in a wooden frame.</sub><br><sub>download: <a href="media/videos/02_chalkboard.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/02_chalkboard.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/05_notepad_doodle.mp4?raw=true"><img src="media/thumbs/05_notepad_doodle.webp" width="180" alt="Notepad doodle animation style"></a><br><b>05 · Notepad doodle</b><br><sub>Blue and red ballpoint doodles on lined, spiral-bound notebook paper.</sub><br><sub>download: <a href="media/videos/05_notepad_doodle.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/05_notepad_doodle.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/06_blueprint.mp4?raw=true"><img src="media/thumbs/06_blueprint.webp" width="180" alt="Blueprint animation style"></a><br><b>06 · Blueprint</b><br><sub>White technical drawing on blueprint blue, with grid, dimensions and a title block.</sub><br><sub>download: <a href="media/videos/06_blueprint.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/06_blueprint.mp4">full size</a></sub></td></tr>
</table>

### Hand-drawn and painted

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/08_hand_drawn.mp4?raw=true"><img src="media/thumbs/08_hand_drawn.webp" width="180" alt="Hand-drawn pencil sketch animation style"></a><br><b>08 · Hand-drawn pencil sketch</b><br><sub>Wobbly graphite lines and soft shading on warm paper, drawn on twos.</sub><br><sub>download: <a href="media/videos/08_hand_drawn.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/08_hand_drawn.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/09_urban_sketch.mp4?raw=true"><img src="media/thumbs/09_urban_sketch.webp" width="180" alt="Urban sketch animation style"></a><br><b>09 · Urban sketch</b><br><sub>Loose ink lines with watercolour washes and a street in the background.</sub><br><sub>download: <a href="media/videos/09_urban_sketch.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/09_urban_sketch.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/10_crayon_book.mp4?raw=true"><img src="media/thumbs/10_crayon_book.webp" width="180" alt="Crayon book animation style"></a><br><b>10 · Crayon book</b><br><sub>Waxy crayon strokes like a child's colouring book, with a sun and crayons.</sub><br><sub>download: <a href="media/videos/10_crayon_book.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/10_crayon_book.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/11_watercolour.mp4?raw=true"><img src="media/thumbs/11_watercolour.webp" width="180" alt="Watercolour animation style"></a><br><b>11 · Watercolour</b><br><sub>Soft wet-edged washes and blooms on textured paper.</sub><br><sub>download: <a href="media/videos/11_watercolour.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/11_watercolour.mp4">full size</a></sub></td></tr>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/13_one_line.mp4?raw=true"><img src="media/thumbs/13_one_line.webp" width="180" alt="One line animation style"></a><br><b>13 · One line</b><br><sub>A single unbroken white line draws everything on a bold flat colour.</sub><br><sub>download: <a href="media/videos/13_one_line.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/13_one_line.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/16_cel_line_boil.mp4?raw=true"><img src="media/thumbs/16_cel_line_boil.webp" width="180" alt="Cel line boil animation style"></a><br><b>16 · Cel line boil</b><br><sub>Classic frame-by-frame cel look: ink outlines that jitter (boil) every few frames.</sub><br><sub>download: <a href="media/videos/16_cel_line_boil.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/16_cel_line_boil.mp4">full size</a></sub></td></tr>
</table>

### Cartoon

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/17_flat_vector.mp4?raw=true"><img src="media/thumbs/17_flat_vector.webp" width="180" alt="Flat vector animation style"></a><br><b>17 · Flat vector</b><br><sub>Clean 2D flat shapes, bright colours and no outlines, like an explainer app.</sub><br><sub>download: <a href="media/videos/17_flat_vector.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/17_flat_vector.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/21_cel_anime_80s.mp4?raw=true"><img src="media/thumbs/21_cel_anime_80s.webp" width="180" alt="80s cel anime animation style"></a><br><b>21 · 80s cel anime</b><br><sub>Hard cel shading, a sunset sky and a city skyline, like an 80s anime still.</sub><br><sub>download: <a href="media/videos/21_cel_anime_80s.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/21_cel_anime_80s.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/22_stick_figure.mp4?raw=true"><img src="media/thumbs/22_stick_figure.webp" width="180" alt="Stick figure animation style"></a><br><b>22 · Stick figure</b><br><sub>A white round-head stick figure pours the chai under one hanging lamp.</sub><br><sub>download: <a href="media/videos/22_stick_figure.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/22_stick_figure.mp4">full size</a></sub></td></tr>
</table>

### Paper and puppets

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/23_cut_out.mp4?raw=true"><img src="media/thumbs/23_cut_out.webp" width="180" alt="Cut-out collage animation style"></a><br><b>23 · Cut-out collage</b><br><sub>Paper shapes with torn edges and drop shadows, moved like a cut-out puppet.</sub><br><sub>download: <a href="media/videos/23_cut_out.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/23_cut_out.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/24_red_papercut.mp4?raw=true"><img src="media/thumbs/24_red_papercut.webp" width="180" alt="Red papercut animation style"></a><br><b>24 · Red papercut</b><br><sub>Red cut paper with lacy patterns and flowers on a warm background.</sub><br><sub>download: <a href="media/videos/24_red_papercut.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/24_red_papercut.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/25_paper_pop_up.mp4?raw=true"><img src="media/thumbs/25_paper_pop_up.webp" width="180" alt="Paper pop-up animation style"></a><br><b>25 · Paper pop-up</b><br><sub>A pop-up book page: layered card that stands up with folds and shadows.</sub><br><sub>download: <a href="media/videos/25_paper_pop_up.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/25_paper_pop_up.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/27_shadow_puppet.mp4?raw=true"><img src="media/thumbs/27_shadow_puppet.webp" width="180" alt="Shadow puppet animation style"></a><br><b>27 · Shadow puppet</b><br><sub>Black puppets with cut-out holes on rods, lit from behind on a glowing screen.</sub><br><sub>download: <a href="media/videos/27_shadow_puppet.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/27_shadow_puppet.mp4">full size</a></sub></td></tr>
</table>

### Print and craft

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/28_woodcut.mp4?raw=true"><img src="media/thumbs/28_woodcut.webp" width="180" alt="Woodcut animation style"></a><br><b>28 · Woodcut</b><br><sub>Black and white relief print with gouged lines and rough edges.</sub><br><sub>download: <a href="media/videos/28_woodcut.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/28_woodcut.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/29_engraving.mp4?raw=true"><img src="media/thumbs/29_engraving.webp" width="180" alt="Engraving animation style"></a><br><b>29 · Engraving</b><br><sub>Fine hatched lines like an old banknote, in a green ornamental frame.</sub><br><sub>download: <a href="media/videos/29_engraving.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/29_engraving.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/31_silkscreen_poster.mp4?raw=true"><img src="media/thumbs/31_silkscreen_poster.webp" width="180" alt="Silkscreen poster animation style"></a><br><b>31 · Silkscreen poster</b><br><sub>Flat ink layers, sunburst rays and slight misregistration, like a screen-printed poster.</sub><br><sub>download: <a href="media/videos/31_silkscreen_poster.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/31_silkscreen_poster.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/33_ukiyo_e.mp4?raw=true"><img src="media/thumbs/33_ukiyo_e.webp" width="180" alt="Ukiyo-e animation style"></a><br><b>33 · Ukiyo-e</b><br><sub>Flat colour and ink outlines like a Japanese woodblock print, with clouds and blossom.</sub><br><sub>download: <a href="media/videos/33_ukiyo_e.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/33_ukiyo_e.mp4">full size</a></sub></td></tr>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/34_art_deco.mp4?raw=true"><img src="media/thumbs/34_art_deco.webp" width="180" alt="Art deco animation style"></a><br><b>34 · Art deco</b><br><sub>Gold lines, stepped frames and sunrays on deep teal, like a 1920s poster.</sub><br><sub>download: <a href="media/videos/34_art_deco.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/34_art_deco.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/35_stained_glass.mp4?raw=true"><img src="media/thumbs/35_stained_glass.webp" width="180" alt="Stained glass animation style"></a><br><b>35 · Stained glass</b><br><sub>Coloured glass panes and black lead lines in an arched window.</sub><br><sub>download: <a href="media/videos/35_stained_glass.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/35_stained_glass.mp4">full size</a></sub></td></tr>
</table>

### Graphic and explainer

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/39_memphis_diorama.mp4?raw=true"><img src="media/thumbs/39_memphis_diorama.webp" width="180" alt="Memphis diorama animation style"></a><br><b>39 · Memphis diorama</b><br><sub>80s Memphis design: loud patterns, squiggles and a checkered floor in a little room.</sub><br><sub>download: <a href="media/videos/39_memphis_diorama.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/39_memphis_diorama.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/51_sticker_explainer.mp4?raw=true"><img src="media/thumbs/51_sticker_explainer.webp" width="180" alt="Sticker explainer animation style"></a><br><b>51 · Sticker explainer</b><br><sub>Die-cut stickers with white borders that pop in, with bold word stickers.</sub><br><sub>download: <a href="media/videos/51_sticker_explainer.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/51_sticker_explainer.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/52_math_diagram.mp4?raw=true"><img src="media/thumbs/52_math_diagram.webp" width="180" alt="Math diagram animation style"></a><br><b>52 · Math diagram</b><br><sub>A chalk-on-navy maths explainer: angles, points, a dotted pour path and a fill graph.</sub><br><sub>download: <a href="media/videos/52_math_diagram.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/52_math_diagram.mp4">full size</a></sub></td></tr>
</table>

### 3D look

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/57_low_poly_island.mp4?raw=true"><img src="media/thumbs/57_low_poly_island.webp" width="180" alt="Low-poly island animation style"></a><br><b>57 · Low-poly island</b><br><sub>Faceted low-poly 3D: the cup sits on a tiny island with palm trees in a polygon sea.</sub><br><sub>download: <a href="media/videos/57_low_poly_island.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/57_low_poly_island.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/58_brick_toy.mp4?raw=true"><img src="media/thumbs/58_brick_toy.webp" width="180" alt="Brick toy animation style"></a><br><b>58 · Brick toy</b><br><sub>Everything built from toy bricks and studs on a green baseplate.</sub><br><sub>download: <a href="media/videos/58_brick_toy.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/58_brick_toy.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/59_glass_product.mp4?raw=true"><img src="media/thumbs/59_glass_product.webp" width="180" alt="Glass product animation style"></a><br><b>59 · Glass product</b><br><sub>A clear glass kettle and cup lit like a product shot, with refraction and glow.</sub><br><sub>download: <a href="media/videos/59_glass_product.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/59_glass_product.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/62_claymation.mp4?raw=true"><img src="media/thumbs/62_claymation.webp" width="180" alt="Claymation animation style"></a><br><b>62 · Claymation</b><br><sub>Lumpy plasticine shapes with fingerprints, stepped like stop-motion.</sub><br><sub>download: <a href="media/videos/62_claymation.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/62_claymation.mp4">full size</a></sub></td></tr>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/80_lidar_survey.mp4?raw=true"><img src="media/thumbs/80_lidar_survey.webp" width="180" alt="Lidar survey animation style"></a><br><b>80 · Lidar survey</b><br><sub>A glowing 3D point cloud, like a laser scan, in blue and gold.</sub><br><sub>download: <a href="media/videos/80_lidar_survey.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/80_lidar_survey.mp4">full size</a></sub></td></tr>
</table>

### Cinema eras

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/70_silent_film.mp4?raw=true"><img src="media/thumbs/70_silent_film.webp" width="180" alt="Silent film animation style"></a><br><b>70 · Silent film</b><br><sub>Black and white 1920s film: grain, flicker, scratches and a stage curtain.</sub><br><sub>download: <a href="media/videos/70_silent_film.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/70_silent_film.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/71_newsreel.mp4?raw=true"><img src="media/thumbs/71_newsreel.webp" width="180" alt="Newsreel animation style"></a><br><b>71 · Newsreel</b><br><sub>Sepia 1940s newsreel with a slanted headline banner and film damage.</sub><br><sub>download: <a href="media/videos/71_newsreel.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/71_newsreel.mp4">full size</a></sub></td></tr>
</table>

### Screens and science

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/64_pixel_art_rpg.mp4?raw=true"><img src="media/thumbs/64_pixel_art_rpg.webp" width="180" alt="Pixel art RPG animation style"></a><br><b>64 · Pixel art RPG</b><br><sub>Chunky pixel sprites and stepped motion in a cosy room, with a game dialogue box.</sub><br><sub>download: <a href="media/videos/64_pixel_art_rpg.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/64_pixel_art_rpg.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/81_microscope.mp4?raw=true"><img src="media/thumbs/81_microscope.webp" width="180" alt="Microscope animation style"></a><br><b>81 · Microscope</b><br><sub>The chai seen through a microscope: a round lens view of bubbles and specks.</sub><br><sub>download: <a href="media/videos/81_microscope.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/81_microscope.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/84_hologram_hud.mp4?raw=true"><img src="media/thumbs/84_hologram_hud.webp" width="180" alt="Hologram HUD animation style"></a><br><b>84 · Hologram HUD</b><br><sub>A cyan sci-fi hologram with wireframes, readouts and a fill gauge.</sub><br><sub>download: <a href="media/videos/84_hologram_hud.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/84_hologram_hud.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/85_circuit_board.mp4?raw=true"><img src="media/thumbs/85_circuit_board.webp" width="180" alt="Circuit board animation style"></a><br><b>85 · Circuit board</b><br><sub>A green circuit board where the chai flows along glowing copper traces.</sub><br><sub>download: <a href="media/videos/85_circuit_board.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/85_circuit_board.mp4">full size</a></sub></td></tr>
</table>

### Abstract

<table>
<tr><td align="center" valign="top" width="25%"><a href="media/videos/87_liquid_motion.mp4?raw=true"><img src="media/thumbs/87_liquid_motion.webp" width="180" alt="Liquid motion animation style"></a><br><b>87 · Liquid motion</b><br><sub>Smooth, bouncy, glossy shapes that stretch and settle like liquid.</sub><br><sub>download: <a href="media/videos/87_liquid_motion.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/87_liquid_motion.mp4">full size</a></sub></td><td align="center" valign="top" width="25%"><a href="media/videos/89_generative_abstract.mp4?raw=true"><img src="media/thumbs/89_generative_abstract.webp" width="180" alt="Generative abstract animation style"></a><br><b>89 · Generative abstract</b><br><sub>Thousands of tiny strokes in a flow field that form the kettle, pour and cup.</sub><br><sub>download: <a href="media/videos/89_generative_abstract.mp4?raw=true">preview</a> · <a href="https://github.com/deenukhan/animation-styles/releases/download/v1.0.0/89_generative_abstract.mp4">full size</a></sub></td></tr>
</table>

## What you need
- A computer with **macOS, Windows or Linux**
- **Claude Code** (included in Claude plans that come with Claude Code, such as Pro and Max)
- **Node.js 18 or newer** (free)
- **Git** (free, to download the skill; you can also download a ZIP instead)
- About **1 GB** of free space and an internet connection for the first run

## Install (about 5 minutes)

**1. Install Node.js.** Go to [nodejs.org](https://nodejs.org), download the "LTS" version and install it like any app. To check it worked, open a terminal (Mac: the Terminal app; Windows: PowerShell) and type:
```bash
node -v
```
You should see a number like `v22.x.x`. Anything from 18 up is fine.

**2. Download the skill into Claude's skills folder.**

Mac or Linux:
```bash
git clone https://github.com/deenukhan/animation-styles.git ~/.claude/skills/animation-styles
```
Windows (PowerShell):
```bash
git clone https://github.com/deenukhan/animation-styles.git "$env:USERPROFILE\.claude\skills\animation-styles"
```
No Git? Click the green **Code** button on this page → **Download ZIP**, unzip it, rename the folder to `animation-styles` and move it into `.claude/skills/` in your home folder.

**3. Install the video engine** (once, takes a minute or two):
```bash
cd ~/.claude/skills/animation-styles
npm install
```
On Windows use `cd "$env:USERPROFILE\.claude\skills\animation-styles"` instead of the first line.

**4. Restart Claude Code** so it notices the new skill.

## How to use it
Open Claude Code and just ask. Mention the style by name, or say "use the animation-styles skill". Claude picks the style, writes the code, renders the video and checks the frames before handing it to you. Your video lands in an `out/` folder, and Claude tells you where.

**The prompts from the post:**

- `Install this skill for me: https://github.com/deenukhan/animation-styles`
- `Use animation-styles to make a 5-second video of a watering can watering a small plant in ukiyo-e style.`
- `now make it pixel art` (after a video, to redraw the same story in another style)

**More prompts to try:**

1. `Use the animation-styles skill and show me all 39 styles.`
2. `Render the ukiyo-e chai film at full size.`
3. `Make my story in ukiyo-e style: a watering can waters a small plant and it sprouts two leaves.`
4. `Animate this in a chalkboard style: a coffee pot fills a mug, then steam rises.`
5. `Turn this into a pixel art animation: a hand drops a coin into a piggy bank and it fills up. Change the dialogue box to "SAVED ONE MORE COIN...".`
6. `Make a stained glass version of a honey jar pouring honey onto a pancake.`
7. `I want a 5-second silent loop for an Instagram carousel about rain filling a pond. Which 3 styles would suit it? Show me previews first.`
8. `Make a whiteboard explainer of a cloud uploading files into a folder that fills up.`
9. `Animate a paint can pouring blue paint into a tin, in the woodcut style, then the same thing in the paper pop-up style.`
10. `Make the newsreel style say "TANK FILLS UP" and show a water tank filling instead of a cup.`
11. `Retell the chai story as a glass product shot, but with orange juice into a tall glass.`
12. `Make a 10-second version of the watercolour style with two pours: first milk, then tea.`
13. `Use the hologram HUD style for a phone battery charging from 0 to 100%.`
14. `Compare the shadow puppet and red papercut styles for my story and tell me which reads better.`
15. `Render frames 0, 50 and 149 of the claymation style so I can check them.`

## How to change the story (in plain words)
Every style follows the same six beats, so a new story keeps the timing and only changes what is drawn:

| Time | Beat | In the chai film |
|---|---|---|
| 0.0–0.8 s | something comes in | the kettle slides in |
| 0.8–1.4 s | it gets ready | the kettle tilts |
| 1.4–3.2 s | the main action | chai pours |
| 1.5–3.3 s | the result grows | the cup fills |
| 3.2–4.2 s | it finishes and leaves | the kettle tilts back and leaves |
| 3.5–5.0 s | the aftermath | steam rises |

So "a watering can waters a plant" becomes: the can comes in, tilts, water falls, the soil darkens and a sprout grows, the can leaves, two leaves open. Tell Claude your story in one or two sentences and it maps it onto these beats for you. It shows you the plan, builds your film in a separate project folder (so the 39 originals stay untouched) and renders it.

Longer stories work too. Ask for 10 or 15 seconds and Claude writes a new timeline with more beats.

## How to render it yourself (optional)
You don't need this if you let Claude do it, but you can run these in the skill folder:

| What | Command | Result |
|---|---|---|
| See the list of styles | `npm run list` | numbers, names and a one-line description |
| Quick preview of style 33 | `npm run render -- 33` | `out/33-ukiyo-e_preview.mp4` (720×900) |
| Full-size video | `npm run render -- 33 --final` | `out/33-ukiyo-e.mp4` (2160×2700) |
| 6 still frames to check | `npm run render -- 33 --frames` | `out/33-ukiyo-e_frames/` |
| Every style | `npm run render -- all` | 39 previews |
| Edit live in your browser | `npm run studio` | opens Remotion Studio |

You can name a style by its number (`33`), its name (`ukiyo-e`) or part of it (`stained`, `pixel`). A preview takes from a few seconds to about a minute. The full size takes longer, and the 3D-look styles are the slowest.

## Honest limits
- **Everything is drawn in code.** Claymation, Brick toy, Glass product, Low-poly island and Lidar survey only *imitate* 3D or real materials, using a small 3D renderer written from scratch. There's no real clay, plastic or glass, and no 3D software.
- **The 3D-look styles render slightly softer** than the others at full size, because they're drawn on a smaller canvas and enlarged. You can ask Claude to render them sharper; it takes about twice as long.
- **It's one short scene, not a whole film.** Each style is built for a 5-second shot with one action. Longer stories work, but they need new beats, which takes more back and forth.
- **Silent.** There's no music or voice. Add sound in your video editor.
- **New objects take a few rounds.** Claude has to redraw your object in each style's look. Simple, clear shapes (a pot, a jar, a can, a plant) work best.
- **Style names describe a technique, not a brand.** "Brick toy" is a generic toy brick, and "Pixel art RPG" is an original scene, not a copy of any game.

## Content rules the skill follows
No real brands, logos or people. No real maps, borders, flags or political symbols. No copying of specific films, shows, games or characters. No made-up facts or statistics. On-screen words only where the style needs them (a game dialogue box, a newsreel headline), and only about your story.

## FAQ
**Is it free?** Yes, the skill and code are free (MIT licence). You need Claude Code, which comes with a paid Claude plan, and Remotion's own licence applies (see below).

**Can I use the videos commercially?** The code is MIT, so yes. Remotion is free for individuals, non-profits and companies of up to 3 people. Bigger companies need a [Remotion company licence](https://www.remotion.dev/license).

**Do I need to know how to code?** No. You talk to Claude in plain English and it writes and runs the code. The code is there if you're curious.

**Can I change the size to 9:16 or 16:9?** Yes, ask Claude. The styles are composed for 4:5 (1080×1350), so Claude will need to move things around for other shapes.

**Why are the style numbers not 1 to 39?** They keep their numbers from the original board of 92 styles, so the gaps are styles that didn't make the cut.

**Where do my videos go?** Into the `out/` folder of your project. Claude tells you the exact path.

**Does it work offline?** After the first render, mostly yes. The first render downloads a browser engine (about 100 MB) and the fonts some styles use.

## Troubleshooting
| Problem | Fix |
|---|---|
| Claude doesn't use the skill | Check the folder is exactly `~/.claude/skills/animation-styles` and has `SKILL.md` inside. Restart Claude Code. Or say "use the animation-styles skill". |
| `npm: command not found` | Node.js isn't installed or the terminal was open before you installed it. Install Node.js and open a new terminal. |
| `Cannot find module` or `remotion: command not found` | Run `npm install` in the skill folder. |
| The first render is stuck on "Downloading Chrome" | It's a one-time ~100 MB download. Wait for it, and check your internet connection. |
| `No style matches` | Run `npm run list` and use a number or name from it. |
| Fonts look plain | The first render downloads Google Fonts. Stay online and render again. |
| A render is very slow | Use the preview (without `--final`) while you work. The 3D-look styles are the slowest. |
| `npm install` warns about install scripts | Safe to ignore. Rendering still works. |
| Windows: `'node' is not recognized` | Reinstall Node.js with "Add to PATH" ticked, then open a new PowerShell. |

## What's inside
| Path | What |
|---|---|
| `SKILL.md` | The instructions Claude follows: pick a style, retell the story, render, check |
| `SETUP.md` | Step-by-step setup guide |
| `src/story.ts` | The story's timing and shapes, shared by every style |
| `src/catalog.ts` | The list of 39 styles and where each one's code lives |
| `src/styles/` | The drawing code, grouped by family |
| `src/films/` | Where your own films go |
| `scripts/` | The render and new-project helpers |
| `media/videos/`, `media/thumbs/` | A preview video and a moving thumbnail of every style |

## Credits
The list of styles was put together from these public sources. **All the code and drawings in this repo are original**, written for this project. No code, artwork or prompts were copied from them.
- **lemo-opuscar**: the `styles/` folder of this open-source film-making repo (most of the style names)
- **mg-styles-15**: a list of 15 motion-graphics styles
- **awesome-claude-5-5-videos**: an atlas of video styles made with Claude
- **Animaker**: its list of [types of animation](https://www.animaker.com/blog/types-of-animations/)

Built with [Remotion](https://www.remotion.dev). Remotion is free for individuals and small teams; teams of more than 3 people need a company licence ([remotion.dev/license](https://www.remotion.dev/license)).

## Licence
Our code is released under the [MIT licence](LICENSE). Remotion and the Google Fonts used by some styles keep their own licences.
