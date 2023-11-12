import { FC, useCallback, useState } from 'react';

import { player } from 'src/app/player/player.ts';
import { Button } from 'src/app/components/button/Button.tsx';

export const RepeatStatusSwitcher: FC = () => {
  const [status, setStatus] = useState(player.getRepeatStatus());

  const onClick = useCallback(() => {
    const newStatus = !status;
    player.setRepeatStatus(newStatus);
    setStatus(newStatus);
  }, [status]);

  return (
    <Button
      icon={status ? 'repeatOne' : 'repeat'}
      iconSize='25px'
      onClick={onClick}
    />
  );
};
