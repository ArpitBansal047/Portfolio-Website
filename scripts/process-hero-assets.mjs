import sharp from "sharp";
import fs from "fs";
import path from "path";

const heroDir = "public/images/hero";
const downloads = "C:/Users/arpitban/Downloads";

const assets = [
  {
    src: path.join(downloads, "white sphere.jpg"),
    out: "sphere-dark-top.png",
    mode: "dark",
  },
  {
    src: path.join(downloads, "white 2.jpg"),
    out: "sphere-dark-bottom.png",
    mode: "dark",
  },
  {
    src: path.join(downloads, "black sphere.jfif"),
    out: "sphere-light-top.png",
    mode: "light",
  },
  {
    src: path.join(downloads, "black 2.jpg"),
    out: "sphere-light-bottom.png",
    mode: "light",
  },
];

const keyToSiteBackground = (data, mode) => {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (mode === "dark") {
      if (lum < 42) {
        data[i + 3] = 0;
      } else if (lum < 72) {
        data[i + 3] = Math.min(data[i + 3], Math.round((lum - 42) * 8));
      }
    } else {
      if (lum > 190) {
        data[i + 3] = 0;
      } else if (lum > 160) {
        data[i + 3] = Math.min(data[i + 3], Math.round((190 - lum) * 6));
      }
    }
  }
};

async function processAsset({ src, out, mode }) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing source image: ${src}`);
  }

  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  keyToSiteBackground(data, mode);

  const targetWidth = Math.min(info.width, 480);
  const outPath = path.join(heroDir, out);

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ width: targetWidth, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log(`${out}: ${meta.width}x${meta.height} (${mode})`);
}

fs.mkdirSync(heroDir, { recursive: true });

for (const asset of assets) {
  await processAsset(asset);
}

console.log("done");
