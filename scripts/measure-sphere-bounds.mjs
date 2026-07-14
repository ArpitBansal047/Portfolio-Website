import sharp from "sharp";
import path from "path";

const downloads = "C:/Users/arpitban/Downloads";
const pairs = [
  ["white sphere.jpg", "white 2.jpg", "dark"],
  ["black sphere.jfif", "black 2.jpg", "light"],
];

async function analyze(file, mode) {
  const src = path.join(downloads, file);
  const { data, info } = await sharp(src).raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  const xs = [];
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const isContent =
        mode === "dark" ? lum > 72 : lum < 185;
      if (isContent) xs.push(x);
    }
  }

  xs.sort((a, b) => a - b);
  const minX = xs[0] ?? 0;
  const p10 = xs[Math.floor(xs.length * 0.1)] ?? 0;
  const median = xs[Math.floor(xs.length * 0.5)] ?? 0;
  const mean = xs.reduce((s, v) => s + v, 0) / (xs.length || 1);

  return { width: info.width, minX, p10, median, mean: Math.round(mean) };
}

for (const [top, bottom, mode] of pairs) {
  const t = await analyze(top, mode);
  const b = await analyze(bottom, mode);
  console.log(`\n${mode.toUpperCase()}`);
  console.log(` top:`, t);
  console.log(` bottom:`, b);
  console.log(` shift p10: ${b.p10 - t.p10}px (${(((b.p10 - t.p10) / t.width) * 100).toFixed(2)}%)`);
  console.log(` shift median: ${b.median - t.median}px`);
}
