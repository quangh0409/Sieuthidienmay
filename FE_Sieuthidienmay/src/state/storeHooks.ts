import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState, store } from './store';

export function useStoreWithInitializer<T>(getter: (state: RootState) => T, initializer: () => unknown) {
  const [state, setState] = useState(getter(store.getState()));
  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(getter(store.getState())));
    initializer();
    return unsubscribe;
  }, [null]);
  return state;
}

export function useStore<T>(getter: (state: RootState) => T) {
  return useStoreWithInitializer(getter, () => {});
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
