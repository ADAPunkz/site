import { useEffect } from 'react';

interface EventAction {
  type: string;
  [key: string]: any;
}

let subscribers = [];

const subscribe = (filter: string, callback: (event: EventAction) => void) => {
  if (!filter || !callback) {
    return undefined;
  }

  subscribers = [...subscribers, [filter, callback]];

  return () => {
    subscribers = subscribers.filter((subscriber) => subscriber[1] !== callback);
  };
};

export const dispatch = (event: EventAction) => {
  const { type } = event;
  const args = [event];

  subscribers.forEach(([filter, callback]) => {
    if (filter !== type) {
      return;
    }

    callback(...args);
  });
};

export const useBus = (type: string, callback: (event: EventAction) => void, deps: any[] = []) => {
  useEffect(() => subscribe(type, callback), [...deps, callback, type]);
  return dispatch;
};
