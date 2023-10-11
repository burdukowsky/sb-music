import { FC } from 'react';

import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher.tsx';
import { PlayerContainer } from 'src/app/components/player-component/components/player-container/PlayerContainer.tsx';
import { Playlist } from 'src/app/components/player-component/components/playlist/Playlist.tsx';
import { Flex } from 'src/app/components/flex/Flex.tsx';
import { Cat } from 'src/app/components/player-component/components/cat/Cat.tsx';
import { PlayerControls } from 'src/app/components/player-component/components/player-controls/PlayerControls.tsx';
import { CurrentTrackView } from 'src/app/components/player-component/components/current-track-view/CurrentTrackView.tsx';

export const PlayerComponent: FC = () => {
  return (
    <PlayerContainer drawer={<Playlist />}>
      <Flex direction='column' gap='20px'>
        <CurrentTrackView />
        <Flex justifyContent='space-between' childrenFlex={['1', '1', '1']}>
          <span />
          <Cat />
          <ThemeSwitcher />
        </Flex>
        <PlayerControls />
      </Flex>
    </PlayerContainer>
  );
};
