import { useState, useEffect, useRef } from 'react';
import { easeInOutCubic } from '../utils/helpers';

interface UseCounterOptions {
  start: number;
  end: number;
  duration: number;
  startOnMount?: boolean;
}

export const useCounter = ({
  start,
  end,
  duration,
  startOnMount = true,
}: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const [isRunning, setIsRunning] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  const startCounter = () => {
    startTimeRef.current = null;
    setIsRunning(true);
  };

  const resetCounter = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    setCount(start);
    setIsRunning(false);
    startTimeRef.current = null;
  };

  useEffect(() => {
    if (startOnMount) startCounter();
  }, [startOnMount]);

  useEffect(() => {
    if (!isRunning) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      const currentCount = Math.round(start + (end - start) * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsRunning(false);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isRunning, start, end, duration]);

  return { count, startCounter, resetCounter, isRunning };
};
