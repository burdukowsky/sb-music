import { FC, useCallback } from 'react';

import { Flex } from 'src/app/components/flex/Flex.tsx';
import { Button } from 'src/app/components/button/Button.tsx';
import { player } from 'src/app/player/player.ts';
import { useTrackLoading } from 'src/app/player/useTrackLoading.ts';

const actions = ['prev', 'play', 'pause', 'next'] as const;

export const PlayerControls: FC = () => {
  const loading = useTrackLoading();

  const onClick = useCallback(
    (action: (typeof actions)[number]) => {
      if (!loading) {
        player[action]();
      }
    },
    [loading],
  );

  return (
    <Flex justifyContent='center'>
      {actions.map(action => (
        <Button
          key={action}
          onClick={() => onClick(action)}
          icon={action}
          loading={loading}
        />
      ))}
    </Flex>
  );
};
