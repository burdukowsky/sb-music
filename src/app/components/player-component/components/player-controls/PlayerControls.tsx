import { FC, useCallback } from 'react';

import { Flex } from 'src/app/components/flex/Flex.tsx';
import { Button } from 'src/app/components/button/Button.tsx';
import { player } from 'src/app/player/player.ts';
import { useTrackLoading } from 'src/app/player/useTrackLoading.ts';
import { PlayPauseSwitcher } from 'src/app/components/player-component/components/player-controls/play-pause-switcher/PlayPauseSwitcher.tsx';

export const PlayerControls: FC = () => {
  const loading = useTrackLoading();

  const onClick = useCallback(
    (action: 'prev' | 'next') => {
      if (!loading) {
        player[action]();
      }
    },
    [loading],
  );

  return (
    <Flex justifyContent='center'>
      <Button onClick={() => onClick('prev')} icon='prev' loading={loading} />
      <PlayPauseSwitcher />
      <Button onClick={() => onClick('next')} icon='next' loading={loading} />
    </Flex>
  );
};
