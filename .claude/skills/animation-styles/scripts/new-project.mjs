#!/usr/bin/env node
// Copies this project (code only) into a new folder, so your own films never touch the installed skill.
//   node ~/.claude/skills/animation-styles/scripts/new-project.mjs animation-films   (from your own folder)
//   npm run new -- ~/Desktop/my-film                                              (from the skill folder)
// Then: cd into the new folder and run npm install
import { cpSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dest = process.argv[2];
if (!dest) { console.error("Usage: npm run new -- <folder>"); process.exit(2); }
// Relative folders are taken from where you ran the command (INIT_CWD is that folder when run through npm).
const base = process.env.INIT_CWD ?? process.cwd();
const target = path.resolve(base, dest.replace(/^~(?=$|\/|\\)/, process.env.HOME ?? process.env.USERPROFILE ?? "~"));
if (existsSync(target) && readdirSync(target).length) { console.error(`${target} already exists and isn't empty.`); process.exit(2); }

const skip = new Set(["node_modules", "out", "media", ".git", "SKILL.md"]);
cpSync(root, target, { recursive: true, filter: (src) => !skip.has(path.relative(root, src).split(path.sep)[0]) });
console.log(`Copied the project to ${target}\nNext:\n  cd "${target}"\n  npm install\n  npm run list`);
