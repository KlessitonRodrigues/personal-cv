import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const WIDTH = 1920;
const HEIGHT = 1080;
const DEFAULT_LINE_HEIGHT = 0.65;
const DEFAULT_INCLINATION = 0.08;
const DEFAULT_INVERT_INCLINATION = false;
const DEFAULT_LINE_RADIUS = 70;
const DEFAULT_SEED = String(Date.now());
const CIRCLE_MIN = 3;
const CIRCLE_MAX = 3;
const MAIN_COLOR = '#7986cb';
const BASE_COLOR = '#F4F4F4';
const DEFAULT_CIRCLE = {
  size: 0.2,
  opacity: { min: 0.1, max: 0.4 },
};

const randomBetween = (random, min, max) => min + random() * (max - min);

const createSeededRandom = seed => {
  const text = String(seed);
  let value = 2166136261;

  for (let index = 0; index < text.length; index++) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }

  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let next = Math.imul(value ^ (value >>> 15), 1 | value);
    next = (next + Math.imul(next ^ (next >>> 7), 61 | next)) ^ next;
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
};

const createBackground = ({
  width,
  height,
  seed,
  lineHeight,
  inclination,
  invertInclination,
  lineRadius = DEFAULT_LINE_RADIUS,
  circle,
}) => {
  const {
    size: circleSize = DEFAULT_CIRCLE.size,
    opacity: {
      min: opacityMin = DEFAULT_CIRCLE.opacity.min,
      max: opacityMax = DEFAULT_CIRCLE.opacity.max,
    } = {},
  } = circle;
  const random = createSeededRandom(seed);
  const size = Math.min(width, height);
  const heightOffset = Math.max(0.1, Math.min(0.9, lineHeight)) * height;
  const inclinationOffset = Math.max(0, Math.min(0.9, inclination)) * height;

  const clampLine = value => Math.min(height * 0.9, Math.max(height * 0.1, value));
  const lineStart = clampLine(heightOffset - inclinationOffset);
  const lineEnd = clampLine(heightOffset + inclinationOffset);
  const left = invertInclination ? lineEnd : lineStart;
  const right = invertInclination ? lineStart : lineEnd;
  const amount = Math.floor(randomBetween(random, CIRCLE_MIN, CIRCLE_MAX + 1));
  const radius = size * Math.max(0.001, Math.min(0.5, circleSize));
  const minOpacity = Math.max(0, Math.min(1, opacityMin));
  const maxOpacity = Math.max(minOpacity, Math.min(1, opacityMax));

  const startY = left;
  const endY = right;
  const chordLength = Math.hypot(width, endY - startY);
  const controlX = width / 2 - ((endY - startY) / chordLength) * lineRadius;
  const controlY = (startY + endY) / 2 + (width / chordLength) * lineRadius;

  const lineY = x => {
    if (lineRadius <= 0) {
      return startY + ((endY - startY) * x) / width;
    }

    const t =
      (-controlX + Math.sqrt(controlX * controlX + (width - 2 * controlX) * x)) /
      (width - 2 * controlX);
    const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;

    return y;
  };

  const circles = Array.from({ length: amount }, () => {
    const margin = size * 0.08;
    const cx = randomBetween(random, margin, width - margin);
    const minY = margin;
    const maxY = lineY(cx) - margin * 0.75;
    const cy = randomBetween(random, minY, Math.max(minY + size * 0.01, maxY));
    const opacity = randomBetween(random, minOpacity, maxOpacity);

    return { cx, cy, r: radius, opacity };
  });

  return { left, right, circles, controlX, controlY };
};

export const buildBackgroundSvg = ({
  height = DEFAULT_LINE_HEIGHT,
  inclination = DEFAULT_INCLINATION,
  invertInclination = DEFAULT_INVERT_INCLINATION,
  invertColors = false,
  lineRadius = DEFAULT_LINE_RADIUS,
  circle = DEFAULT_CIRCLE,
  seed = DEFAULT_SEED,
} = {}) => {
  const { left, right, circles, controlX, controlY } = createBackground({
    width: WIDTH,
    height: HEIGHT,
    seed,
    lineHeight: height,
    inclination,
    invertInclination,
    lineRadius,
    circle,
  });

  const mainColor = invertColors ? BASE_COLOR : MAIN_COLOR;
  const baseColor = invertColors ? MAIN_COLOR : BASE_COLOR;

  const circlesMarkup = circles
    .map(
      circle =>
        `<circle cx="${circle.cx.toFixed(2)}" cy="${circle.cy.toFixed(2)}" ` +
        `r="${circle.r.toFixed(2)}" style="fill: var(--background-base, ${baseColor})" ` +
        `opacity="${circle.opacity}" />`,
    )
    .join('');

  const lineMarkup =
    lineRadius > 0
      ? `<path d="M 0,0 L ${WIDTH},0 L ${WIDTH},${right.toFixed(2)} Q ${controlX.toFixed(2)},${controlY.toFixed(2)} 0,${left.toFixed(2)} Z" style="fill: var(--background-main, ${mainColor})" />`
      : `<polygon points="0,0 ${WIDTH},0 ${WIDTH},${right.toFixed(2)} 0,${left.toFixed(2)}" style="fill: var(--background-main, ${mainColor})" />`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" preserveAspectRatio="xMidYMid slice">
  <rect width="${WIDTH}" height="${HEIGHT}" style="fill: var(--background-base, ${baseColor})" />
  ${lineMarkup}
  ${circlesMarkup}
</svg>
`;
};

export const generateBackground = async ({ output, ...options } = {}) => {
  if (!output) throw new Error('`output` file path is required');

  const svg = buildBackgroundSvg(options);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, svg);

  console.log(`Background SVG written to ${output}`);
};

const isMain = process.argv[1] && import.meta.url === `file://${path.resolve(process.argv[1])}`;

if (isMain) {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const output = path.resolve(dir, '../public/images/background.svg');
  await generateBackground({ output });
}
