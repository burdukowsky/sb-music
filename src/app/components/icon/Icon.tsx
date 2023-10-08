import React, { CSSProperties, FC, useMemo } from 'react';
import { Property } from 'csstype';

import DarkMode from 'src/icons/dark-mode.svg?react';
import LightMode from 'src/icons/light-mode.svg?react';

export type IconType = 'darkMode' | 'lightMode';

const icons: Record<IconType, any> = {
  darkMode: DarkMode,
  lightMode: LightMode,
};

interface Props {
  name: IconType;
  color?: Property.Fill;
  size?: Property.Width;
}

export const Icon: FC<Props> = ({
  name,
  color = 'currentColor',
  size = '24px',
}) => {
  const style = useMemo<CSSProperties>(() => {
    return {
      fill: color,
      width: size,
    };
  }, [color, size]);

  return React.createElement(icons[name], { style });
};
