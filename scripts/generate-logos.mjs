import sharp from "sharp";
import fs from "fs/promises";

const sizes = {
  "favicon-16": 16,
  "favicon-32": 32,
  "favicon-48": 48,
  icon: 192,
  "apple-touch-icon": 180,
  "logo-small": 64,
  "logo-medium": 256,
  "logo-large": 512,
  "og-image": 1200,
};

async function generateLogos() {
  const logo = await fs.readFile("public/yobitech-logo.svg");

  // Generate all PNGs
  for (const [name, size] of Object.entries(sizes)) {
    const width = name === "og-image" ? size : size;
    const height = name === "og-image" ? Math.floor(size * 0.525) : size;

    await sharp(logo)
      .resize(width, height)
      .toFormat("png")
      .toFile(`public/${name}.png`);

    console.log(`Generated ${name}.png (${width}x${height}px)`);
  }

  // Generate multi-size favicon.ico
  const faviconSizes = [16, 32, 48];
  const faviconBuffers = await Promise.all(
    faviconSizes.map((size) =>
      sharp(logo).resize(size, size).toFormat("png").toBuffer(),
    ),
  );

  await sharp(faviconBuffers[1]) // Use 32x32 as base
    .toFormat("ico")
    .toFile("public/favicon.ico");

  console.log("Generated favicon.ico");

  // Create a copy of the SVG as icon.svg
  await fs.copyFile("public/yobitech-logo.svg", "public/icon.svg");
  console.log("Copied icon.svg");
}

generateLogos().catch(console.error);
