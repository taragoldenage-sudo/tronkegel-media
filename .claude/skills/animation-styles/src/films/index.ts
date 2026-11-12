// Your own films go here. Each one is registered as its own composition next to the 39 styles.
// Start a film by copying the style you like (see src/catalog.ts for where each style lives)
// into src/films/<your-film>.tsx, then add it to the list below:
//
//   import { MyCoffeeFilm } from "./my-coffee-film";
//   export const FILMS: Film[] = [
//     { id: "my-coffee-film", component: MyCoffeeFilm },                          // 5 s, like the styles
//     { id: "my-long-film", component: MyLongFilm, durationInFrames: 300 },       // 10 s
//   ];
//
// Render it with:  npx remotion render src/index.ts my-coffee-film out/my-coffee-film.mp4 --scale=2 --crf=16
import type React from "react";

export type Film = {
  id: string; // letters, numbers and dashes only
  component: React.FC;
  durationInFrames?: number; // default 150 (5 s at 30 fps)
  width?: number; // default 1080 (rendered at 2160 with --scale=2)
  height?: number; // default 1350
};

export const FILMS: Film[] = [];
