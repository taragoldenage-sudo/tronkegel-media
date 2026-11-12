// tronkegel-media: офлайн-режим шрифтов. При REMOTION_OFFLINE_FONTS=1 Google Fonts не грузятся
// (сеть облачной сессии их блокирует), браузер берёт системный шрифт-заменитель.
export const gfont = <A extends unknown[]>(
  load: (...a: A) => { fontFamily: string },
  family: string,
  ...args: A
): { fontFamily: string } =>
  process.env.REMOTION_OFFLINE_FONTS === "1" ? { fontFamily: `"${family}"` } : load(...args);
