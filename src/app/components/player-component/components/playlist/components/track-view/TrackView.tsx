import { FC } from 'react';

import { Track } from 'src/app/types.ts';
import { player } from 'src/app/player.ts';
import css from './TrackView.module.scss';

interface Props {
  track: Track;
  index: number;
}

export const TrackView: FC<Props> = ({ track, index }) => {
  return (
    <div className={css.TrackView} onClick={() => player.playTrack(index)}>
      {track.name}
    </div>
  );
};
