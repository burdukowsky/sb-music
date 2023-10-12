import { FC, useEffect, useState } from 'react';

import { player } from 'src/app/player/player.ts';
import { Track } from 'src/app/types.ts';
import { TrackView } from 'src/app/components/player-component/components/playlist/components/track-view/TrackView.tsx';
import { Flex } from 'src/app/components/flex/Flex.tsx';
import { useTrackLoading } from 'src/app/player/useTrackLoading.ts';

interface Props {
  onTrackClick?: () => void;
}

export const Playlist: FC<Props> = ({ onTrackClick }) => {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    setTracks(player.getPlaylist());
  }, []);

  const loading = useTrackLoading();

  return (
    <Flex direction='column' alignItems='center'>
      {tracks.map((t, index) => {
        return (
          <TrackView
            key={index}
            track={t}
            index={index}
            loading={loading}
            onClick={onTrackClick}
          />
        );
      })}
    </Flex>
  );
};
