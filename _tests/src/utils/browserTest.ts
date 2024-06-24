import environment from '../config/env';

export const testWebsiteUrl = () => {
  const url = environment.WEBSITEURL;
  fetch(url).catch(() => {
    throw new Error('No website available on ' + url);
  });
};

export const scrollPage = (top: number) => `window.scrollTo({ top: ${top}, behavior: 'smooth' });`;

export const mobileScreen = { width: 450, height: 1080 };
