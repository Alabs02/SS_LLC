import { IconType } from 'react-icons';
import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface IFormWizardContent {
  tabID: number;
  selectedTab: number;
  children: ReactNode;
}

export interface ITabItem {
  tabID: number,
  icon: IconType,
  title: string,
  slug: string;
}

export interface IFormWizardPanel {
  tabs: Array<ITabItem>;
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}