import sharp from "sharp";

const src = "C:/Users/arpitban/Downloads/Copilot_20260714_112828.png";
const out = "public/images/hero/mesh-grid.png";

const targetBg = [9, 9, 11];

const resized = await sharp(src)
  .resize({ width: 1400, withoutEnlargement: true })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = resized;
const { width, height, channels } = info;

function getPixel(x, y) {
  const i = (y * width + x) * channels;
  return [data[i], data[i + 1], data[i + 2]];
}

const samples = [
  ...Array.from({ length: 12 }, (_, index) => getPixel(index * 40, 0)),
  ...Array.from({ length: 12 }, (_, index) => getPixel(width - 1 - index * 40, 0)),
  ...Array.from({ length: 8 }, (_, index) => getPixel(0, index * 50)),
];

const bg = samples.reduce(
  (acc, [r, g, b]) => [acc[0] + r, acc[1] + g, acc[2] + b],
  [0, 0, 0],
).map((v) => v / samples.length);

const tolerance = 58;

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const i = (y * width + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const distSample = Math.hypot(r - bg[0], g - bg[1], b - bg[2]);
    const distTarget = Math.hypot(r - targetBg[0], g - targetBg[1], b - targetBg[2]);
    const dist = Math.min(distSample, distTarget);

    if (dist < tolerance) {
      data[i + 3] = 0;
      continue;
    }

    const edgeSoftness = Math.min(1, (dist - tolerance) / 28);
    data[i + 3] = Math.round(255 * edgeSoftness);
  }
}

await sharp(data, {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(out);

const meta = await sharp(out).metadata();
console.log(`mesh: ${out} ${meta.width}x${meta.height} (bg keyed to #09090b)`);
