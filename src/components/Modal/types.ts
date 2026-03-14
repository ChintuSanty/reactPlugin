import React from 'react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalAnimation = 'fade' | 'slide' | 'zoom' | 'none';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  animation?: ModalAnimation;
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}
