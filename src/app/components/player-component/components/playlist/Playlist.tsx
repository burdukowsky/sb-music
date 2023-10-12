import { FC, useEffect, useState } from 'react';

import { player } from 'src/app/player/player.ts';
import { Track } from 'src/app/types.ts';
import { TrackView } from 'src/app/components/player-component/components/playlist/components/track-view/TrackView.tsx';
import { Flex } from 'src/app/components/flex/Flex.tsx';

export const Playlist: FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    setTracks(player.getPlaylist());
  }, []);

  return (
    <Flex direction='column' alignItems='center'>
      {tracks.map((t, index) => {
        return <TrackView key={index} track={t} index={index} />;
      })}
    </Flex>
  );
};
