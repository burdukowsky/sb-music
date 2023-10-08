import { Theme } from '../types.ts';
import { getLocalStorageValue, lsThemeKey } from './local-storage.ts';
import { defaultTheme } from '../globals.ts';

export function setColorTheme(theme: Theme): void {
  document.documentElement.className = theme === 'default' ? '' : theme;
}

export function configureInitialTheme(): void {
  setColorTheme(getLocalStorageValue(lsThemeKey, defaultTheme));
}
