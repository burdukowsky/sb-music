import { ReactNode, useState } from 'react';
import classNames from 'classnames';

import { FCC } from 'src/app/types.ts';
import css from './PlayerContainer.module.scss';
import { Button } from 'src/app/components/button/Button.tsx';
import { Flex } from 'src/app/components/flex/Flex.tsx';

interface Props {
  drawer: ReactNode;
}

export const PlayerContainer: FCC<Props> = ({ drawer, children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={css.PlayerContainer}>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        className={css.PlayerContainerHeader}
      >
        <span>SB Music</span>
        <Button onClick={() => setDrawerOpen(!drawerOpen)}>Playlist</Button>
      </Flex>
      <div
        className={classNames(css.PlayerContainerDrawer, {
          [css.PlayerContainerDrawerOpen as string]: drawerOpen,
        })}
      >
        {drawer}
      </div>
      {children}
    </div>
  );
};
