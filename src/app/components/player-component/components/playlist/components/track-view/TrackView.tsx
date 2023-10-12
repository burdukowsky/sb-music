import { FC, useCallback } from 'react';
import classNames from 'classnames';

import { Track } from 'src/app/types.ts';
import { player } from 'src/app/player/player.ts';
import css from './TrackView.module.scss';

interface Props {
  track: Track;
  loading?: boolean;
  index: number;
  onClick?: () => void;
}

export const TrackView: FC<Props> = ({
  track,
  loading = false,
  index,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    if (!loading) {
      player.playTrack(index);
      onClick?.();
    }
  }, [index, loading, onClick]);

  return (
    <div
      className={classNames(css.TrackView, {
        [css.TrackViewLoading as string]: loading,
      })}
      onClick={handleClick}
    >
      {track.name}
    </div>
  );
};
