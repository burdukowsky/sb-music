import { ReactNode, useState } from 'react';
import classNames from 'classnames';

import { FCC } from 'src/app/types.ts';
import css from './PlayerContainer.module.scss';
import { Button } from 'src/app/components/button/Button.tsx';
import { Flex } from 'src/app/components/flex/Flex.tsx';
import { AppIcon } from 'src/app/components/app-icon/AppIcon.tsx';

interface Props {
  drawer: (closeDrawer: () => void) => ReactNode;
}

export const PlayerContainer: FCC<Props> = ({ drawer, children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={css.PlayerContainer}>
      <Flex direction='column' gap='15px'>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          className={css.PlayerContainerHeader}
        >
          <Flex
            as='h1'
            gap='4px'
            alignItems='center'
            childrenStyle={[{ lineHeight: 0 }]}
          >
            <AppIcon /> Music
          </Flex>
          <Button onClick={() => setDrawerOpen(!drawerOpen)}>Playlist</Button>
        </Flex>
        <div>{children}</div>
      </Flex>

      <div
        className={classNames(css.PlayerContainerDrawer, {
          [css.PlayerContainerDrawerOpen as string]: drawerOpen,
        })}
      >
        <div>{drawer(() => setDrawerOpen(false))}</div>
      </div>
    </div>
  );
};
