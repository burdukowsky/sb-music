import { FC, useCallback, useState } from 'react';

import { PlayerComponent } from 'src/app/components/player-component/PlayerComponent.tsx';
import { Track } from 'src/app/types.ts';
import { player } from 'src/app/player/player.ts';
import { Button } from 'src/app/components/button/Button.tsx';
import { useOnInit } from 'src/app/hooks/useOnInit.ts';

export const App: FC = () => {
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>(
    'loading',
  );

  const fetchData = useCallback(async () => {
    setStatus('loading');
    try {
      const response = await fetch('/playlist-actual.json');
      const { tracks } = (await response.json()) as { tracks: Track[] };
      player.setPlaylist(tracks);
      setStatus('ready');
    } catch (e) {
      setStatus('error');
    }
  }, []);

  useOnInit(() => {
    fetchData();
  });

  if (status === 'loading') {
    return <>Loading...</>;
  }

  if (status === 'error') {
    return (
      <>
        Error!
        <Button onClick={fetchData}>Try again</Button>
      </>
    );
  }

  return <PlayerComponent />;
};
