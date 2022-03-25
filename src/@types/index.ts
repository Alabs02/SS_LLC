import {
  ReactNode,
} from "react";
import { IconType } from "react-icons/lib";

export type DrawerRoute = {
  to: string,
  title: string,
  icon: IconType | any,
};
export type INoEntity = {
  imgUrl: string;
  heading: string;
  subheading: string;
}
export type IBreadcrumbItem = {
  title: string;
  to: string;
}
