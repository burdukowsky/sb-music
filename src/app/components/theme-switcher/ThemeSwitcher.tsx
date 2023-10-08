import { FC, useCallback, useEffect } from 'react';

import { Theme } from 'src/app/types.ts';
import { IconType } from '../icon/Icon.tsx';
import { lsThemeKey } from 'src/app/utils/local-storage.ts';
import { defaultTheme } from 'src/app/globals.ts';
import { setColorTheme } from 'src/app/utils/common.ts';
import { useLocalStorage } from 'src/app/hooks/useLocalStorage.ts';
import { Button } from '../button/Button.tsx';

const map: Record<Theme, IconType> = {
  default: 'darkMode',
  dark: 'lightMode',
};

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useLocalStorage<Theme>(lsThemeKey, defaultTheme);

  useEffect(() => {
    setColorTheme(theme);
  }, [theme]);

  const onClick = useCallback(() => {
    setTheme(theme === 'default' ? 'dark' : 'default');
  }, [setTheme, theme]);

  return <Button icon={map[theme]} iconSize='25px' onClick={onClick} />;
};
