import { useEffect, useState } from 'react';

import { Track } from 'src/app/types.ts';
import { player } from 'src/app/player/player.ts';

export function useCurrentTrack(): Track | null {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const sub = player.onPlay(track => {
      setTrack(track);
    });
    return () => sub.unsubscribe();
  }, []);

  return track;
}
