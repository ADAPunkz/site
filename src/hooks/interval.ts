import { useEffect, useRef, useState } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();
  const [id, setId] = useState<NodeJS.Timer>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      setId(id);

      return () => clearInterval(id);
    }
  }, [delay]);

  return () => clearInterval(id);
};
