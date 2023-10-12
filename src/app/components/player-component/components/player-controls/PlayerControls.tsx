import { FC } from 'react';

import { Flex } from 'src/app/components/flex/Flex.tsx';
import { Button } from 'src/app/components/button/Button.tsx';
import { player } from 'src/app/player/player.ts';

export const PlayerControls: FC = () => {
  return (
    <Flex justifyContent='center'>
      <Button onClick={() => player.prev()} icon='prev' />
      <Button onClick={() => player.play()} icon='play' />
      <Button onClick={() => player.pause()} icon='pause' />
      <Button onClick={() => player.next()} icon='next' />
      <Button onClick={() => player.mute()} icon='mute' />
      <Button onClick={() => player.unmute()} icon='unmute' />
    </Flex>
  );
};
