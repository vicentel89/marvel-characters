import { useRef, useEffect, useMemo } from 'react';

export function debounce<F extends (...args: any[]) => any>(
  callback: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout | null;

  return function executedFunction(...args: Parameters<F>) {
    const later = () => {
      clearTimeout(timeout!);
      callback(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

export const useDebounce = <F extends (...args: any[]) => any>(
  callback: F,
  wait: number
): (() => void) => {
  const ref = useRef<F>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.(...[]);
    };

    return debounce(func, wait);
  }, [wait]);

  return debouncedCallback;
};
