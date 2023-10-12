import { useEffect, useState } from 'react';

import { player } from 'src/app/player/player.ts';

export function useTrackLoading(): boolean {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const sub = player.onLoadingStatusChange(status => {
      setLoading(status);
    });
    return () => sub.unsubscribe();
  }, []);

  return loading;
}
