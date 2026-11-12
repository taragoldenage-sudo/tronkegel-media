# Animation styles with Claude Code: setup guide

Thanks for commenting! This is the skill from the post: **39 animation styles that Claude draws in code**, from whiteboard and chalkboard to ukiyo-e, stained glass, pixel art and a silent film. Every style tells the same 5-second chai story, and Claude can retell it with your own story in any of them. No image or video AI is used: every frame is code, rendered with Remotion.

**Skill name:** `animation-styles` · **Download:** [github.com/deenukhan/animation-styles](https://github.com/deenukhan/animation-styles)

## The fast way (let Claude install it)
If you already have Claude Code and Node.js, open Claude Code and paste:

> Install this skill for me: https://github.com/deenukhan/animation-styles

Then start a new Claude Code session and ask:

> Use animation-styles to make a 5-second video of [your idea] in ukiyo-e style.

You get an MP4. Say "now make it pixel art" (or any other style) to redraw the same story in a new look. If anything goes wrong, follow the manual steps below.

## If you're Claude: how to install this skill
1. Run `node -v`. It must be v18 or newer. If not, ask the user to install the LTS version from https://nodejs.org (macOS with Homebrew: `brew install node`; Windows: `winget install OpenJS.NodeJS.LTS`), open a new terminal and check again.
2. Clone into the skills folder, named exactly `animation-styles`:
   - macOS/Linux: `git clone --depth 1 https://github.com/deenukhan/animation-styles.git ~/.claude/skills/animation-styles`
   - Windows (PowerShell): `git clone --depth 1 https://github.com/deenukhan/animation-styles.git "$env:USERPROFILE\.claude\skills\animation-styles"`
   - Already there? `git -C ~/.claude/skills/animation-styles pull`. No Git? Use https://github.com/deenukhan/animation-styles/archive/refs/heads/main.zip and rename the unzipped folder to `animation-styles`.
3. `cd ~/.claude/skills/animation-styles && npm install` (warnings about install scripts are fine).
4. `npm run list` must print 39 styles.
5. Tell the user it's installed and a new session will list the skill. If they ask for a video in this same session, read `~/.claude/skills/animation-styles/SKILL.md` and follow it.

## What you need
| Tool | Why | Cost |
|---|---|---|
| **Claude Code** | Runs the skill: picks the style, writes the code, renders, checks the frames | Needs a Claude plan that includes Claude Code |
| **Node.js 18+** | Remotion (the video renderer) runs on it | Free |
| **Git** | Downloads the skill (or use the ZIP, step 2) | Free |
| **Internet** | The first render downloads a browser engine (~100 MB) and some fonts | |

## Step 1: Install Node.js (2 minutes)
1. Open [nodejs.org](https://nodejs.org) and download the **LTS** version.
2. Install it like any other app (on Windows, keep "Add to PATH" ticked).
3. Open a **new** terminal: on Mac, the Terminal app; on Windows, PowerShell. Type `node -v` and press Enter. You should see something like `v22.11.0`.

Mac users with Homebrew can run `brew install node git` instead.

## Step 2: Download the skill
Copy this into your terminal and press Enter.

**Mac or Linux:**
```bash
git clone https://github.com/deenukhan/animation-styles.git ~/.claude/skills/animation-styles
```
**Windows (PowerShell):**
```bash
git clone https://github.com/deenukhan/animation-styles.git "$env:USERPROFILE\.claude\skills\animation-styles"
```
**No Git?** On the GitHub page click the green **Code** button → **Download ZIP**. Unzip it, rename the folder from `animation-styles-main` to `animation-styles`, and move it to:
- Mac/Linux: `~/.claude/skills/animation-styles/` (in Finder press Cmd+Shift+G and type `~/.claude/skills`; Cmd+Shift+. shows hidden folders)
- Windows: `C:\Users\<your name>\.claude\skills\animation-styles\`

## Step 3: Install the video engine (1–2 minutes)
**Mac or Linux:**
```bash
cd ~/.claude/skills/animation-styles
npm install
```
**Windows (PowerShell):**
```bash
cd "$env:USERPROFILE\.claude\skills\animation-styles"
npm install
```
Warnings are normal. It's done when you get your prompt back. To check, run `npm run list`: you should see the 39 styles.

## Step 4: Restart Claude Code
Close and reopen Claude Code (or start a new session) so it picks up the skill.

## Step 5: Your first video
Open Claude Code in any folder and paste:

> Use the animation-styles skill. Render the ukiyo-e chai film as a preview, then show me where it is.

Then make one with your own story:

> Use animation-styles to make a 5-second video of a watering can watering a small plant in ukiyo-e style.

When it's done, try another look for the same story:

> now make it pixel art

Claude maps your story onto the six beats (comes in, gets ready, main action, result grows, leaves, aftermath), builds it in an `animation-films` folder inside the folder you opened Claude Code in, checks the frames, and gives you a full-size 2160×2700 MP4. Each new style you ask for is added next to the earlier ones, so nothing gets overwritten.

**More ideas:** a coffee pot filling a mug in chalkboard style · a coin dropping into a piggy bank in pixel art · honey pouring onto a pancake in stained glass · a phone charging in hologram HUD · rain filling a pond in watercolour.

## Tips
- **Say the style by name** ("woodcut", "paper pop-up", "silent film"). Not sure? Ask "which 3 styles suit this story?" and Claude will suggest some and show previews.
- **Keep the story to one clear action** for a 5-second film. For longer films, ask for 10 or 15 seconds.
- **Simple objects work best:** a pot, jar, can, glass, plant or box.
- **Ask Claude to check frames** if something looks off. It can render stills at any moment.
- All 39 original films are on the GitHub page, and the full-size versions are on the [releases page](https://github.com/deenukhan/animation-styles/releases).

## Licences
- **This skill:** MIT. Free to use, change and share, including for client work.
- **Remotion:** free for individuals, non-profits and companies of up to 3 people. Bigger companies need a Remotion company licence ([remotion.dev/license](https://www.remotion.dev/license)).
- **Originality:** the styles are techniques anyone can use. Don't copy a specific film, game, character or brand, and keep real logos, people, maps and flags out of your videos. The skill follows these rules for you.

## Troubleshooting
- *Claude doesn't use the skill:* check the folder is exactly `.claude/skills/animation-styles` in your home folder, with `SKILL.md` inside. Restart Claude Code, or start your message with "Use the animation-styles skill".
- *`npm` or `node` not found:* install Node.js (Step 1) and open a **new** terminal.
- *`Cannot find module ...`:* run `npm install` in the skill folder (Step 3).
- *The first render sits on "Downloading Chrome":* it's a one-time download of about 100 MB. Give it a minute.
- *Fonts look wrong:* the first render downloads Google Fonts, so stay online.
- *Rendering is slow:* ask for a preview first. The 3D-look styles (claymation, brick toy, glass, low-poly, lidar) are the slowest.

Made by [@neuraltech.ai](https://www.instagram.com/neuraltech.ai).
