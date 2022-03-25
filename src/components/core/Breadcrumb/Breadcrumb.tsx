// STYLES
import "./Breadcrumb.scss";

import { Fragment } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IBreadcrumbItem } from "src/@types";

export type IBreadcrumbItems = Array<IBreadcrumbItem>;

export const Divider = () => {
  return (
    <RiArrowRightSLine className="app-breadcrumb__divider" />
  );
}

export const BreadcrumbItem = ({ to, title }: IBreadcrumbItem) => {
  return (
    <NavLink key={`${to}${title}`} to={to} className={
      ({ isActive }) => isActive
        ? "app-breadcrumb__link--active"
        : "app-breadcrumb__link--inactive"
    }>
      <li className="app-breadcrumb__item fw-semi-bold lh-20">{title}</li>
    </NavLink>
  );
}

const Breadcrumb = ({ breadcrumbItems }: { breadcrumbItems: IBreadcrumbItems }) => {

  const renderBreadcrumbItems = () => {
    return breadcrumbItems.map((item, index) => (
      <div className="d-flex align-items-center" key={index}>
        <BreadcrumbItem key={index} {...item} />
        { (index+1 !== breadcrumbItems.length) && <Divider />}
      </div>
    ));
  }

  return (
    <Fragment>
      <nav className="app-breadcrumb">
        <ul className="app-breadcrumb__list d-flex align-items-center">
          {renderBreadcrumbItems()}
        </ul>
      </nav>
    </Fragment>
  )
}

export default Breadcrumb;