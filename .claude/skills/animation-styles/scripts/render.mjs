#!/usr/bin/env node
// Render helper. Run it through npm so it uses this project's Remotion:
//   npm run list                         -> show all 39 styles
//   npm run render -- 33                 -> quick preview of style 33 (720x900) in out/
//   npm run render -- ukiyo-e --final    -> full quality 2160x2700 master in out/
//   npm run render -- 33 --frames        -> 6 check frames + one contact sheet in out/
//   npm run render -- 33 --still 75      -> one PNG of frame 75
//   npm run render -- all                -> previews of every style
//   npm run render -- my-film --final    -> your own film from src/films (by its id)
// A style can be picked by number (33), id (33-ukiyo-e), slug (ukiyo-e) or part of its name (ukiyo).
import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entry = "src/index.ts";
const outDir = path.join(root, "out");
const bin = path.join(root, "node_modules", ".bin", process.platform === "win32" ? "remotion.cmd" : "remotion");

// The style list comes straight from src/catalog.ts, so there is only one list to keep up to date.
const catalog = readFileSync(path.join(root, "src/catalog.ts"), "utf8");
const STYLES = [...catalog.matchAll(/^\s*s\("(\d\d)", "([a-z0-9-]+)", "([^"]+)", "([^"]+)", "([^"]+)"/gm)].map((m) => ({
  nn: m[1], id: `${m[1]}-${m[2]}`, slug: m[2], name: m[3], family: m[4], look: m[5],
}));

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const picks = args.filter((a, i) => !a.startsWith("--") && !(i > 0 && ["--still", "--crf", "--out"].includes(args[i - 1])));

if (flag("--list") || !picks.length) {
  let fam = "";
  for (const s of STYLES) {
    if (s.family !== fam) { fam = s.family; console.log(`\n${fam}`); }
    console.log(`  ${s.nn}  ${s.slug.padEnd(22)} ${s.look}`);
  }
  console.log(`\n${STYLES.length} styles. Example: npm run render -- 33   (or: npm run render -- ukiyo-e --final)`);
  process.exit(0);
}

const find = (q) => {
  const k = q.toLowerCase().replace(/_/g, "-");
  const n = /^\d+$/.test(k) ? k.padStart(2, "0") : null;
  return (
    STYLES.find((s) => s.nn === n || s.id === k || s.slug === k) ??
    STYLES.find((s) => s.name.toLowerCase().includes(k.replace(/-/g, " ")) || s.slug.includes(k))
  );
};

const run = (cmdArgs) => {
  const r = spawnSync(bin, cmdArgs, { cwd: root, stdio: "inherit", shell: process.platform === "win32" });
  if (r.status !== 0) { console.error(`\nRender failed (exit ${r.status}). See the error above.`); process.exit(r.status ?? 1); }
};

mkdirSync(outDir, { recursive: true });
const list = picks.includes("all") ? STYLES : picks.map((q) => {
  const s = find(q);
  if (s) return s;
  // Not one of the 39: treat it as the id of your own film in src/films (e.g. my-coffee-film).
  if (/^[a-z0-9-]+$/i.test(q)) return { id: q, name: q };
  console.error(`No style matches "${q}". Run: npm run list`); process.exit(2);
});

for (const s of list) {
  if (value("--still")) {
    const f = value("--still");
    const out = path.join("out", `${s.id}_frame${f}.png`);
    run(["still", entry, s.id, out, `--frame=${f}`, ...(flag("--final") ? ["--scale=2"] : [])]);
    console.log(`Saved ${out}`);
  } else if (flag("--frames")) {
    // Six frames across the story: before the kettle, tilting, mid-pour, nearly full, kettle leaving, steam.
    const frames = [0, 20, 50, 75, 105, 149];
    const dir = path.join("out", `${s.id}_frames`);
    mkdirSync(path.join(root, dir), { recursive: true });
    for (const f of frames) run(["still", entry, s.id, path.join(dir, `${String(f).padStart(3, "0")}.png`), `--frame=${f}`, "--scale=0.5"]);
    const sheet = path.join("out", `${s.id}_sheet.png`);
    const inputs = frames.flatMap((f) => ["-i", path.join(dir, `${String(f).padStart(3, "0")}.png`)]);
    // The sheet needs a full ffmpeg on your PATH (Remotion's built-in one can't stack images). Without it you still get the 6 PNGs.
    const r = spawnSync("ffmpeg", ["-y", "-loglevel", "error", ...inputs, "-filter_complex", "hstack=inputs=6", sheet], { cwd: root, stdio: "ignore" });
    console.log(r.status === 0 ? `Saved ${dir}/ and the contact sheet ${sheet}` : `Saved 6 frames in ${dir}/ (no ffmpeg found, so no contact sheet)`);
  } else {
    const final = flag("--final");
    const out = value("--out") ?? path.join("out", final ? `${s.id}.mp4` : `${s.id}_preview.mp4`);
    const crf = value("--crf") ?? (final ? "16" : "23");
    run(["render", entry, s.id, out, "--codec=h264", "--pixel-format=yuv420p", `--crf=${crf}`, "--muted", `--scale=${final ? 2 : 2 / 3}`]);
    console.log(`Saved ${out} (${final ? "2160x2700 final" : "720x900 preview"})`);
  }
}
