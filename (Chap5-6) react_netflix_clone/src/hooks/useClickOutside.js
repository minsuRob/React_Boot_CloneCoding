import { useEffect } from 'react';

export default function useClickOutside(ref, handler) {
  console.log("useClickOutside")
  useEffect(()=> {
    const listener = event => {
      const el = ref?.current;

      if (!el || el.contains(event.target)) return;

      handler(event);
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    }
  }, [ref, handler]);
}