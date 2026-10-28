import styled, { css } from 'styled-components';

export type IBackgroundVideo = {
  src: string;
};

const Video = styled.video(
  () => css`
    position: fixed;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
);

/**
 * Fixed full-page looping background video (muted, autoplaying).
 *
 * The video itself is a static asset pre-rendered by
 * `src/utils/utils.background.video.js` (gradient + a handful of icons
 * drifting around). Regenerate it with:
 *   node ./src/utils/utils.background.video.js
 */
const BackgroundVideo = (props: IBackgroundVideo) => {
  const { src } = props;

  return <Video src={src} autoPlay loop muted playsInline />;
};

export default BackgroundVideo;
