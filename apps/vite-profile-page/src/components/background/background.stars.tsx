import { cloneElement, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import styled, { css, useTheme } from 'styled-components';

import { IconsType, iconMap } from 'src/components/common/common.icons.map';
import { IThemeProps } from 'src/styles/styles.theme';

export type IBackgroundStars = {
  icons: IconsType[];
  iconColor?: string;
  iconSize?: number;
  gap?: number;
  iconOpacity?: number;
  gradientColors?: [string, string];
  gradientAngle?: number;
};

const Container = styled.div<{
  iconsUri: string;
  gradientFrom: string;
  gradientTo: string;
  gradientAngle: number;
}>(
  ({ iconsUri, gradientFrom, gradientTo, gradientAngle }) => css`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${gradientFrom};
    background-image: ${iconsUri ? `url('${iconsUri}'),` : ''}
      linear-gradient(${gradientAngle}deg, ${gradientFrom}, ${gradientTo});
    background-repeat: repeat, no-repeat;
    background-position: center, center;
    background-size: auto, cover;
    background-attachment: fixed;
  `,
);

const buildIconsGridUri = (
  icons: IconsType[],
  iconSize: number,
  gap: number,
  iconColor: string,
  iconOpacity: number,
) => {
  if (!icons.length) return '';

  const cell = iconSize + gap;
  const cols = Math.ceil(Math.sqrt(icons.length));
  const rows = Math.ceil(icons.length / cols);
  const tileW = cell * cols;
  const tileH = cell * rows;

  const grid = icons
    .map((type, index) => {
      const icon = iconMap[type];
      if (!icon) return '';

      const markup = renderToStaticMarkup(cloneElement(icon, { size: iconSize, color: iconColor }));
      const col = index % cols;
      const row = Math.floor(index / cols);
      const x = col * cell + gap / 2;
      const y = row * cell + gap / 2;

      return `<g transform="translate(${x}, ${y})" opacity="${iconOpacity}">${markup}</g>`;
    })
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${tileW}" height="${tileH}" viewBox="0 0 ${tileW} ${tileH}">${grid}</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

/**
 * Fixed full-page background made of a vector grid of small icon svgs
 * rendered on top of a css gradient.
 *
 * The icon set is required, while colors fall back to the current theme.
 */
const BackgroundStars = (props: IBackgroundStars) => {
  const theme = useTheme() as IThemeProps;
  const {
    icons,
    iconColor = theme.colors.white,
    iconSize = 16,
    gap = 32,
    iconOpacity = 0.5,
    gradientColors = [theme.colors.main, theme.colors.main],
    gradientAngle = 145,
  } = props;

  const iconsUri = useMemo(
    () => buildIconsGridUri(icons, iconSize, gap, iconColor, iconOpacity),
    [icons, iconSize, gap, iconColor, iconOpacity],
  );

  return (
    <Container
      iconsUri={iconsUri}
      gradientFrom={gradientColors[0]}
      gradientTo={gradientColors[1]}
      gradientAngle={gradientAngle}
    />
  );
};

export default BackgroundStars;
