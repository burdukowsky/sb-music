import { FC } from 'react';

import css from './CurrentTrackView.module.scss';
import { useCurrentTrack } from 'src/app/player/useCurrentTrack.ts';
import { useTrackLoading } from 'src/app/player/useTrackLoading.ts';

export const CurrentTrackView: FC = () => {
  const currentTrack = useCurrentTrack();
  const loading = useTrackLoading();

  return (
    <div className={css.CurrentTrackView}>
      {loading ? 'loading...' : currentTrack?.name ?? '---'}
    </div>
  );
};
