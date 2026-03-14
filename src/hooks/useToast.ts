import { useState, useCallback } from 'react';
import { generateId } from '../utils/helpers';

export type ToastType = 'success' | 'warning' | 'error' | 'info';
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  position: ToastPosition;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
    (
      message: string,
      type: ToastType = 'info',
      duration: number = 3000,
      position: ToastPosition = 'top-right'
    ) => {
      const id = generateId('toast');
      const toast: ToastItem = { id, message, type, duration, position };
      setToasts((prev) => [...prev, toast]);

      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
      return id;
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearAll = useCallback(() => setToasts([]), []);

  return { toasts, addToast, removeToast, clearAll };
};
