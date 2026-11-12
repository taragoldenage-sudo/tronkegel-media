---
name: animation-styles
description: Makes short silent animated videos (MP4) in 39 animation styles drawn entirely in code with Remotion, with no image or video model: whiteboard, chalkboard, notepad doodle, blueprint, pencil sketch, watercolour, crayon, one line, cel anime, flat vector, stick figure, cut-out collage, papercut, paper pop-up, shadow puppet, woodcut, engraving, silkscreen, ukiyo-e, art deco, stained glass, Memphis, sticker explainer, math diagram, low-poly, brick toy, glass product, claymation, lidar, silent film, newsreel, pixel art, microscope, hologram HUD, circuit board, liquid motion and generative abstract. Use whenever the user says "use animation-styles", asks to "make a 5-second video of [idea] in [style] style", "animate this in a [style] style" or "make my story in ukiyo-e style", or asks to restyle a video made with it ("now make it pixel art", "try it in watercolour", "same thing in another style"). Also use to show, compare or pick animation styles, or to install or update this skill.
---

# Animation styles

A Remotion project with 39 hand-built animation styles. Every style redraws one fixed story, so they can be compared side by side and reused as templates: **a kettle comes in, tilts, pours chai into a kulhad (clay cup), the cup fills, the kettle leaves, steam rises.** 150 frames, 30 fps, 1080×1350 (4:5), silent. Rendered at `--scale=2` it is 2160×2700.

Everything is drawn in code: SVG with filters, or a `<canvas>` painted each frame. No image model, video model or stock footage is involved, so the output is original and repeatable.

The project lives in this skill's folder (the folder holding this file, called `<skill>` below). Run commands from there.

## 0. First time in a session
1. `cd <skill>` and check `node_modules/` exists. If not, run `npm install` (about a minute, needs Node 18+).
2. `npm run list` prints all 39 styles with their number, slug and a one-line look.
3. The first render downloads a headless Chrome once (about 100 MB). It needs internet.

## The usual request: "make a 5-second video of <idea> in <style> style"
This is the main job (and the prompt on the post that sends people here). Do it end to end without stopping for questions unless the idea is unclear:
1. **Work folder:** use `animation-films/` inside the user's current working folder. If it doesn't exist, create it from that folder with `node <skill>/scripts/new-project.mjs animation-films`, then `cd animation-films && npm install` (fast after the first time). If it exists (a follow-up), reuse it as it is.
2. **Pick the style** from the request (section 1). No style named? Suggest three that suit the idea and ask.
3. **Plan the story** on the six beats (section 3) in a short table. Show it in one message and carry on; don't wait unless something is ambiguous.
4. **Shapes first:** put the user's objects (the actor, the container, what flows, what rises) in `src/films/<idea>-shapes.ts` as SVG paths in the same coordinates as `P` in `story.ts`, with the beat table as a comment at the top. Every style version of this idea imports from this one file.
5. **Build** `src/films/<idea>-<style>.tsx` from the style's component (section 3), using the shapes file, and register it in `src/films/index.ts` with id `<idea>-<style>`.
6. **Check:** `npm run render -- <idea>-<style> --frames` and look at all six frames (section 5). Fix and repeat.
7. **Deliver:** `npm run render -- <idea>-<style> --final` and give the user the full path of `out/<idea>-<style>.mp4`. Mention that they can ask for another style ("now make it pixel art").

**Restyle follow-up ("now make it pixel art", "try watercolour", "same in woodcut"):** stay in the same `animation-films/` folder, keep the same idea, beat table and shapes file, and build a new `src/films/<idea>-<new-style>.tsx` from the new style's component. Register it alongside the earlier version (never overwrite it), check the frames, render the final and give the new path. If the user names a style loosely ("8-bit", "old movie", "chalk"), map it with section 1. The 3D-look styles (57, 58, 59, 62, 80) build objects as 3D meshes, so swapping in new objects takes more work there: turn the shapes into simple lathe or box meshes with the helpers in `src/styles/3d/mesh.ts`.

## 1. Pick a style
Ask the user which style they want if they haven't said. If they're unsure, show `npm run list` grouped by family and the gallery in `README.md` (each style has a moving preview in `media/thumbs/` and a 720×900 MP4 in `media/videos/`). Match loosely: "Japanese print" → 33 Ukiyo-e, "chalk" → 02 Chalkboard, "8-bit" or "retro game" → 64 Pixel art RPG, "clay" → 62 Claymation, "Lego-like" → 58 Brick toy (never call it Lego on screen), "old movie" → 70 Silent film or 71 Newsreel, "sci-fi screen" → 84 Hologram HUD.

| Family | Styles (number, slug) |
|---|---|
| Drawn on a board | 01 whiteboard · 02 chalkboard · 05 notepad-doodle · 06 blueprint |
| Hand-drawn and painted | 08 hand-drawn · 09 urban-sketch · 10 crayon-book · 11 watercolour · 13 one-line · 16 cel-line-boil |
| Cartoon | 17 flat-vector · 21 cel-anime-80s · 22 stick-figure |
| Paper and puppets | 23 cut-out · 24 red-papercut · 25 paper-pop-up · 27 shadow-puppet |
| Print and craft | 28 woodcut · 29 engraving · 31 silkscreen-poster · 33 ukiyo-e · 34 art-deco · 35 stained-glass |
| Graphic and explainer | 39 memphis-diorama · 51 sticker-explainer · 52 math-diagram |
| 3D look | 57 low-poly-island · 58 brick-toy · 59 glass-product · 62 claymation · 80 lidar-survey |
| Cinema eras | 70 silent-film · 71 newsreel |
| Screens and science | 64 pixel-art-rpg · 81 microscope · 84 hologram-hud · 85 circuit-board |
| Abstract | 87 liquid-motion · 89 generative-abstract |

`src/catalog.ts` is the single list: number, composition id (`33-ukiyo-e`), name, family, look, the on-screen words a style shows, and the file its code lives in.

## 2. Show a built-in style as it is
```bash
npm run render -- 33            # 720x900 preview  -> out/33-ukiyo-e_preview.mp4  (seconds to a minute)
npm run render -- 33 --final    # 2160x2700 master -> out/33-ukiyo-e.mp4          (crf 16)
npm run render -- 33 --frames   # 6 check frames   -> out/33-ukiyo-e_frames/ (+ a contact sheet if ffmpeg is installed)
npm run render -- 33 --still 75 # one PNG of frame 75
```
A style can be named by number, id, slug or part of its name (`ukiyo`, `pixel`, `stained`). The ready-made 720×900 videos are already in `media/videos/`, and the full 2160×2700 masters are on the GitHub release page, so to just *show* a style you don't need to render at all.

## 3. Retell it with the user's story or object
The story is fixed in `src/story.ts`. Keep its timing and change what is drawn. That is what makes a new film come out right first time: every style already knows how to stage these beats.

**The beats (frames at 30 fps, never move them for a 5-second film):**
| Frames | Beat | Value from `storyAt(f)` |
|---|---|---|
| 0–24 | the actor enters from the right | `kx, ky` |
| 24–42 | it gets ready (tilts) | `tilt` (0 → −38°) |
| 42–96 | the main action (the pour) | `streaming`, `stream` (an SVG path from `tip` into the cup) |
| 44–100 | the result grows (the cup fills) | `level` 0 → 1, `surface` (the chai ellipse) |
| 96–126 | it finishes and leaves | `tilt` back to 0, `kx` slides out |
| 104–150 | the aftermath (steam rises) | `steam[0..2]` 0 → 1, drawn with `steamPath(i, p, t0)` |

`P` in `story.ts` holds the SVG paths for the cup (`kulhadBody`, `kulhadOutline`, `rim`) and the kettle (`kettleBody`, `kettleLid`, `kettleSpout`, `kettleHandle`, `kettleBand`, plus `KNOB`). The kettle is drawn around its own origin and placed with `translate(kx, ky) rotate(tilt)`.

**Map the user's story onto the same six beats first**, in a short table, and show it to them. Examples:
| User's idea | Actor (kettle) | Action (pour) | Result (fill) | Aftermath (steam) |
|---|---|---|---|---|
| Coffee into a mug | coffee pot | coffee stream | mug fills | steam |
| Watering a plant | watering can | water drops | soil darkens, a sprout grows with `level` | two leaves open |
| Saving money | a hand with a coin | coin drops | piggy bank fills (`level` → coin stack) | sparkles |
| Paint into a tin | paint can | thick paint | tin fills | a drip settles |
| Data upload (abstract or info styles) | a cloud | packets travel along `stream` | a bar or gauge fills with `level` | a tick mark rises |

**Then build it:**
1. Work in a separate project so the installed skill stays clean: by default `animation-films/` in the user's current folder (see "The usual request" above), created with `node <skill>/scripts/new-project.mjs <folder>` and then `npm install` inside it. Never build the user's films inside `<skill>` itself.
2. Copy the chosen style's component from its file (see `src/catalog.ts`) into `src/films/<film-name>.tsx`, together with the helpers it imports. Never edit the 39 originals in place: they are the reference.
3. Replace the shapes, not the timing: swap the kettle and cup paths for the user's objects (keep them about the same size and position: cup centred at x 540, rim at y ≈ 800; actor at rest around (796, 324) with its "spout" at the local point (−251, −62)), recolour the liquid, change what rises. Keep the style's own materials, palette logic, filters, texture and motion character (stepped on twos or threes for hand-made media, smooth for digital, flicker for film).
4. If the style shows words (listed in the catalog's `text` field: 51, 52, 64, 70, 71, 84 and 85 show words), rewrite them for the new story: short, plain English, only about the story.
5. Register the film in `src/films/index.ts` and render it (section 4).

**A longer or different story** (more beats, two actors, a camera move): write a new story file next to `story.ts` (for example `src/films/my-story.ts`) with its own `storyAt(f)` that returns every value the drawing needs, list the new beats in a table at its top, set `durationInFrames` on the film, and keep the rule "the story file owns all timing, the style file owns all looks". Quantise frames (`Math.floor(f / 2) * 2`) only where the style is meant to look hand-made.

Rules for the code: deterministic only (no `Math.random()`, no `Date`; use seeded functions of the frame or index), unique filter and clipPath ids, fonts only via `@remotion/google-fonts/<Font>` with `loadFont()` at module level, and nothing installed beyond `package.json`.

## 4. Render
| Need | Command |
|---|---|
| Quick look | `npm run render -- <film-or-style>` (720×900, crf 23) |
| Final | `npm run render -- <film-or-style> --final` (2160×2700, crf 16) |
| A film from `src/films` | `npm run render -- <film-id> --final` (same flags work: `--frames`, `--still 75`) |
| Live editing | `npm run studio` opens Remotion Studio in the browser |

The 3D-look styles (57, 58, 59, 62, 80) paint a software-rendered scene on a canvas at 1.5× (1.25× for 80) of 1080 wide, then stretch to 2160, so they are slightly softer and slower than the rest. For a sharper final, raise the second argument of `glView(...)` in `src/catalog.ts` (2 = native 4K, about twice as slow).

## 5. Check the output before you hand it over
Run `npm run render -- <id> --frames` and **look at every frame** (Read the PNGs). Then fix and re-render. Allow two or three passes.
- **Readable story:** at frame 50 something is clearly pouring, at 75 the container is visibly filling, at 149 the aftermath is visible.
- **Nothing clipped** at the frame edges; the actor fully enters and fully leaves.
- **Layering:** the liquid stays inside the container, the stream goes into it (not in front of the near rim), steam starts at the surface.
- **The style reads from one frame:** someone who knows the style should name it from a still. Two styles should never look like a recolour of each other.
- **Contrast:** the liquid and stream are visible against the background, nothing muddy.
- **Motion character:** stepped where the medium is hand-made, smooth where it's digital; no flicker you didn't mean.
- **Text:** only the words you intended, spelled right, inside the frame.
- **Content rules** (below) all pass.
Finally watch the preview MP4 once end to end, then render the final.

## 6. Content rules (always)
- **No real brands, logos, products, people, channel names or TV networks**, and no trademarked names on screen. "Brick toy" is a generic toy brick, never a named brand.
- **No real maps, places or national borders**, and no flags or political symbols or slogans. A landscape, if any, is invented with no recognisable geography.
- **No copying a specific film, show, title sequence, game, character, or a known character's silhouette or sprites.** A style or genre is fine; a particular existing work isn't.
- **No invented facts:** no fake statistics, prices, dates, quotes or sources. A data style plots the story's own values (like the fill level) and nothing else.
- **Text only when the style is typographic, broadcast or a game UI**, and then short English about the story itself.
- Keep it original: the user's story, your own drawings, the style as a technique.

## Files
| Path | What |
|---|---|
| `src/story.ts` | The story: size, timing, beats, the object paths, `storyAt(f)` and `steamPath()` |
| `src/kit.tsx` | Shared helpers: `Stage` (an SVG stage), `Paper` (paper grain), `Rough` (wobbly displacement), `region` |
| `src/catalog.ts` | The 39 styles: number, id, name, family, look, on-screen words, file, component |
| `src/styles/<family>/` | The drawing code, grouped by technique |
| `src/films/` | The user's own films |
| `src/Root.tsx`, `src/index.ts` | Registers every style and film as a Remotion composition |
| `scripts/render.mjs` | `npm run list` / `npm run render` |
| `scripts/new-project.mjs` | `npm run new -- <folder>` copies the code to a fresh project |
| `media/videos/`, `media/thumbs/` | A 720×900 MP4 and an animated WebP of every style |
