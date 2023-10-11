import { FC, useEffect, useState } from 'react';

import css from './CurrentTrackView.module.scss';
import { player } from 'src/app/player.ts';

export const CurrentTrackView: FC = () => {
  const [title, setTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sub = player.onPlay(track => {
      setTitle(track?.name);
    });
    return () => sub.unsubscribe();
  }, []);

  return <div className={css.CurrentTrackView}>{title ?? '---'}</div>;
};
