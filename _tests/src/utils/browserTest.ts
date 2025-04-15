import env from '../config/env';

export const testWebsiteUrl = () => {
  const url = env.CURRENT_URL;
  fetch(url).catch(() => {
    throw new Error('No website available on ' + url);
  });
};

export const scrollPage = (top: number) => `window.scrollTo({ top: ${top}, behavior: 'smooth' });`;

export const screenSize = {
  mobile: { width: 450, height: 1080 },
  laptop: { width: 768, height: 1080 },
  desktop: { width: 1280, height: 1080 },
};
