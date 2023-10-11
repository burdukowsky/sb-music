import { Theme } from '../types.ts';
import { getLocalStorageValue, lsThemeKey } from './local-storage.ts';
import { defaultTheme } from '../globals.ts';

export function setColorTheme(theme: Theme): void {
  document.documentElement.className = theme === 'default' ? '' : theme;
}

export function configureInitialTheme(): void {
  setColorTheme(getLocalStorageValue(lsThemeKey, defaultTheme));
}

export function removeFromArrayByIndex(array: any[], index: number): void {
  array.splice(index, 1);
}

export function removeFromArray<T>(array: T[], item: T): void {
  const index = array.indexOf(item);
  if (index > -1) {
    removeFromArrayByIndex(array, index);
  }
}
