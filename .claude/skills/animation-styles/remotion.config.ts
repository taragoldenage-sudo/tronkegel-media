import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setMuted(true); // the films are silent

// tronkegel-media: в облачной сессии сеть не даёт скачать Chrome — используем предустановленный.
import { existsSync } from "node:fs";
const LOCAL_CHROME = "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";
if (existsSync(LOCAL_CHROME)) Config.setBrowserExecutable(LOCAL_CHROME);
