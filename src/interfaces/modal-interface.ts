import { ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface ICover extends IChildren {
  onClose?: () => void | any;
  showCloseBtn: boolean;
  isOpen: boolean;
  modalTitle?: string;
  variant: 'auto' | 'sm' | 'md' | 'lg' | 'full';
}

export interface IContent extends IChildren {
  variant?: 'auto' | 'sm' | 'md' | 'lg' | 'full';
}
