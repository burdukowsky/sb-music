import { useEffect, useState } from 'react';

import { player } from 'src/app/player/player.ts';

export function useTrackPlaying(): boolean {
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const sub = player.onPlayingStatusChange(newStatus => {
      setStatus(newStatus);
    });
    return () => sub.unsubscribe();
  }, []);

  return status;
}
