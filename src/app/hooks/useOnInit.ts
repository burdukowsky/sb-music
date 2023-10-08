import { useEffect, useRef } from 'react';

export function useOnInit(callback: () => any): void {
  const initialized = useRef<boolean>(false);

  useEffect(() => {
    if (!initialized.current) {
      callback();
      initialized.current = true;
    }
  });
}
