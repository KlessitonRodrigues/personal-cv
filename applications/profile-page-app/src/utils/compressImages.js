import { glob } from 'glob';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const INPUT_DIR = 'dist';
const exts = ['png', 'jpg', 'jpeg'];

const files = await glob(`${INPUT_DIR}/**/*.+(${exts.join('|')})`, { nodir: true });
console.log(`Compressing ${files.length} images...`);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const buf = await fs.readFile(file);

  let img = sharp(buf);

  img = img.resize({
    width: 1280,
    height: 720,
    fit: 'inside',
    withoutEnlargement: true,
  });

  if (ext === '.png') img = img.png({ quality: 25, palette: true });
  else img = img.jpeg({ quality: 25, mozjpeg: true });

  const out = await img.toBuffer();
  const fileName = path.basename(file);
  await fs.writeFile(file, out);
  console.log(
    `- ${fileName}: ${(buf.length / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB`,
  );
}
