import { useState } from 'react';

export const useCursor = (count: number) => {
  const [index, setIndex] = useState(0);

  const moveCursor = (next: number) => {
    if (next < 0) {
      setIndex(count - 1);
    } else if (next >= count) {
      setIndex(0);
    } else {
      setIndex(next);
    }
  };

  const skipForward = () => moveCursor(index + 1);
  const skipBackward = () => moveCursor(index - 1);

  return { index, skipBackward, skipForward };
};
