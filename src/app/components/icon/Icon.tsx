import React, { CSSProperties, FC, useMemo } from 'react';
import { Property } from 'csstype';

import DarkMode from 'src/icons/dark-mode.svg?react';
import LightMode from 'src/icons/light-mode.svg?react';
import Prev from 'src/icons/prev.svg?react';
import Next from 'src/icons/next.svg?react';
import Play from 'src/icons/play.svg?react';
import Pause from 'src/icons/pause.svg?react';
import Mute from 'src/icons/mute.svg?react';
import Unmute from 'src/icons/unmute.svg?react';

export type IconType =
  | 'darkMode'
  | 'lightMode'
  | 'prev'
  | 'next'
  | 'play'
  | 'pause'
  | 'mute'
  | 'unmute';

const icons: Record<IconType, any> = {
  darkMode: DarkMode,
  lightMode: LightMode,
  prev: Prev,
  next: Next,
  play: Play,
  pause: Pause,
  mute: Mute,
  unmute: Unmute,
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
