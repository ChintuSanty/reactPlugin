import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends Element>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T>, boolean] => {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && observerRef.current) {
            observerRef.current.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, isIntersecting];
};
