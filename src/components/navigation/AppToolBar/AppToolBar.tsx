import "./AppToolBar.scss";

import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export type ILinks = {
  title: string;
  to: string;
}

const AppToolBar = () => {

  const links: ILinks[] = [
    {
      title: "Home",
      to: "/signin",
    },
    {
      title: "Services",
      to: "/",
    },
    {
      title: "Calculator",
      to: "/",
    },
    {
      title: "Tracking",
      to: "/",
    },
    {
      title: "About Us",
      to: "/",
    },
    {
      title: "Contact Us",
      to: "/",
    },
  ];

  const renderLinks = () => {
    return links.map((link, index) => (
      <NavLink
        key={index}
        to={link.to}
        className={({ isActive }) => isActive ? "app-toolbar--active" : "app-toolbar--inactive"}
      >
        <span className="app-toolbar-copy fw-medium">{link.title}</span>
      </NavLink>
    ));
  }

  return (
    <Fragment>
      <div className="app-toolbar">
        <div className="app-toolbar-brand">
          <img src="/static/logo.svg" alt="brand-logo" />
        </div>

        <div className="app-toolbar-spacer"></div>

        <div className="app-toolbar-navigation">
          {renderLinks()}
        </div>
        <HiMenu size={28} color="#323232" className="app-toolbar-menu pointer" />
      </div>
    </Fragment>
  );
}

export default AppToolBar;