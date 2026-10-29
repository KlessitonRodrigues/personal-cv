import ffmpegPath from 'ffmpeg-static';
import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa6';
import {
  SiDocker,
  SiDotnet,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiVscodium,
} from 'react-icons/si';
import sharp from 'sharp';

const run = promisify(execFile);

// Plain-JS icon map used only by this generator (no JSX allowed in a script
// run directly by node). Mirrors a subset of
// src/components/common/common.icons.map.tsx - add more icons here by
// importing them from `react-icons` and registering them below.
const iconMap = {
  js: SiJavascript,
  aws: FaAws,
  node: SiNodedotjs,
  react: SiReact,
  python: SiPython,
  csharp: SiDotnet,
  typescript: SiTypescript,
  github: SiGithub,
  nest: SiNestjs,
  next: SiNextdotjs,
  vscode: BiLogoVisualStudio,
  copilot: SiGithubcopilot,
  docker: SiDocker,
  jest: SiJest,
  git: SiGit,
};

const randomBetween = (min, max) => min + Math.random() * (max - min);

const renderIconSvg = (type, size, color) => {
  const Icon = iconMap[type];
  if (!Icon) throw new Error(`Unknown background video icon: "${type}"`);
  return renderToStaticMarkup(React.createElement(Icon, { size, color }));
};

const buildFrameSvg = ({
  width,
  height,
  gradientFrom,
  gradientTo,
  gradientAngle,
  particles,
  t,
}) => {
  const icons = particles
    .map(particle => {
      const progress = ((t + particle.delay) % particle.duration) / particle.duration;
      const angle = progress * Math.PI * 2;
      const x = particle.x + Math.sin(angle) * particle.dx;
      const y = particle.y + Math.cos(angle) * particle.dy;
      const rotate = Math.sin(angle) * particle.rotate;

      return (
        `<g transform="translate(${x.toFixed(2)}, ${y.toFixed(2)}) rotate(${rotate.toFixed(2)})" ` +
        `opacity="${particle.opacity}">${particle.svg}</g>`
      );
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs>
      <linearGradient id="bg" gradientTransform="rotate(${gradientAngle})">
        <stop offset="0%" stop-color="${gradientFrom}" />
        <stop offset="100%" stop-color="${gradientTo}" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)" />
    ${icons}
  </svg>`;
};

/**
 * Generates a seamless looping mp4 with a gradient background and a handful
 * of icons drifting around, meant to be used as a page background video
 * (<video autoPlay loop muted playsInline />).
 *
 * The icon motion is parametrized so that the state at t=0 and t=duration
 * match exactly, so looping the output file shows no visible jump/cut.
 */
export const generateBackgroundVideo = async ({
  output,
  icons = Object.keys(iconMap),
  count = 40,
  width = 1600,
  height = 900,
  fps = 16,
  duration = 30,
  iconSize = 20,
  iconColor = '#ffffff',
  iconOpacity = 1,
  gradientColors = ['#616161', '#616161'],
  gradientAngle = 60,
  spread = 125,
}) => {
  if (!icons.length) throw new Error('`icons` must contain at least one icon name');
  if (!output) throw new Error('`output` file path is required');

  const particles = Array.from({ length: count }, (_, index) => {
    const type = icons[index % icons.length];

    return {
      svg: renderIconSvg(type, iconSize, iconColor),
      x: randomBetween(width * 0.1, width * 0.9),
      y: randomBetween(height * 0.1, height * 0.9),
      dx: randomBetween(spread * 0.5, spread),
      dy: randomBetween(spread * 0.5, spread),
      rotate: randomBetween(10, 25),
      duration,
      delay: randomBetween(0, duration),
      opacity: iconOpacity,
    };
  });

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'bg-video-'));
  const totalFrames = Math.round(duration * fps);

  try {
    console.log(`Rendering ${totalFrames} frames (${width}x${height})...`);
    for (let frame = 0; frame < totalFrames; frame++) {
      const svg = buildFrameSvg({
        width,
        height,
        gradientFrom: gradientColors[0],
        gradientTo: gradientColors[1],
        gradientAngle,
        particles,
        t: frame / fps,
      });

      const png = await sharp(Buffer.from(svg)).png().toBuffer();
      const frameFile = path.join(tmpDir, `frame-${String(frame).padStart(5, '0')}.png`);
      await fs.writeFile(frameFile, png);
    }

    await fs.mkdir(path.dirname(output), { recursive: true });

    console.log('Encoding video with ffmpeg...');
    await run(ffmpegPath, [
      '-y',
      '-framerate',
      String(fps),
      '-i',
      path.join(tmpDir, 'frame-%05d.png'),
      '-c:v',
      'libx264',
      '-pix_fmt',
      'yuv420p',
      '-movflags',
      '+faststart',
      output,
    ]);

    console.log(`Background video written to ${output}`);
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
};

const isMain = process.argv[1] && import.meta.url === `file://${path.resolve(process.argv[1])}`;

if (isMain) {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const output = path.resolve(dir, '../public/videos/background.stars.mp4');
  await generateBackgroundVideo({ output });
}
