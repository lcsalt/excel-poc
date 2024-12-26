import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

//works the same way as useEffect but it is not called when component is mounted

export function useDidUpdate(fn: EffectCallback, dependencies?: DependencyList) {
  const mounted = useRef(false);

  useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  useEffect(() => {
    if (mounted.current) {
      return fn();
    }

    mounted.current = true;
    return undefined;
  }, dependencies);
}
