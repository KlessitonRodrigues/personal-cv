export const checkIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
