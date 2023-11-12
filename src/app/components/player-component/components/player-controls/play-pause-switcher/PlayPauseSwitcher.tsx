import { FC, useMemo } from 'react';

import { useTrackLoading } from 'src/app/player/useTrackLoading.ts';
import { Button } from 'src/app/components/button/Button.tsx';
import { useTrackPlaying } from 'src/app/player/useTrackPlaying.ts';
import { player } from 'src/app/player/player.ts';

const actions = ['play', 'pause'] as const;

export const PlayPauseSwitcher: FC = () => {
  const loading = useTrackLoading();
  const playing = useTrackPlaying();

  const action = useMemo<(typeof actions)[number]>(
    () => (playing ? 'pause' : 'play'),
    [playing],
  );

  return (
    <Button onClick={() => player[action]()} icon={action} loading={loading} />
  );
};
