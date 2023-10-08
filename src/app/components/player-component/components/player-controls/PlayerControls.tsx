import { FC } from 'react';

import { Flex } from 'src/app/components/flex/Flex.tsx';
import { Button } from 'src/app/components/button/Button.tsx';
import { player } from 'src/app/player.ts';

export const PlayerControls: FC = () => {
  return (
    <Flex>
      <Button onClick={() => player.prev()}>prev</Button>
      <Button onClick={() => player.play()}>play</Button>
      <Button onClick={() => player.pause()}>pause</Button>
      <Button onClick={() => player.next()}>next</Button>
      <Button onClick={() => player.mute()}>mute</Button>
      <Button onClick={() => player.unmute()}>unmute</Button>
    </Flex>
  );
};
