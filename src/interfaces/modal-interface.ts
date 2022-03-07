import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export  interface ICover extends IChildren {
  showCloseBtn: boolean;
  isOpen: boolean;
  modalTitle?: string;
  onClose?: () => void | any;
}

