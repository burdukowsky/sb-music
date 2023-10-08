import { FC, PropsWithChildren } from 'react';

export type Theme = 'default' | 'dark';

export type FCC<P = object> = FC<PropsWithChildren<P>>;

export interface Track {
  name: string;
  year: string;
  file: string;
}
