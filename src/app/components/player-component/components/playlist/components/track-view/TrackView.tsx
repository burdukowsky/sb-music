import { FC, useCallback } from 'react';
import classNames from 'classnames';

import { Track } from 'src/app/types.ts';
import { player } from 'src/app/player/player.ts';
import css from './TrackView.module.scss';

interface Props {
  track: Track;
  loading?: boolean;
  index: number;
}

export const TrackView: FC<Props> = ({ track, loading = false, index }) => {
  const onClick = useCallback(() => {
    if (!loading) {
      player.playTrack(index);
    }
  }, [index, loading]);

  return (
    <div
      className={classNames(css.TrackView, {
        [css.TrackViewLoading as string]: loading,
      })}
      onClick={onClick}
    >
      {track.name}
    </div>
  );
};
