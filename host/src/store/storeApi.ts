import { useSyncExternalStore } from 'react';

import { store } from './';
import { selectors } from './counter/selectors';

export type RootState = ReturnType<typeof store.getState>;
export type Selector<T> = (s: import('./').RootState) => T;

export const getState = () => {
  return store.getState();
};

export const subscribe = (listener: () => void) => {
  return store.subscribe(listener);
};

export const useSelector = <T>(selector: Selector<T>) => {
  return useSyncExternalStore(
    subscribe,
    () => selector(getState()),
    () => selector(getState()),
  );
};

export { selectors };
