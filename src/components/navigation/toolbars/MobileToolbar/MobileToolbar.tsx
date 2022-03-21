// STYLES
import "./MobileToolbar.scss";

import { Fragment } from "react";
import { HiMenu } from "react-icons/hi";

const MobileToolbar = () => {
  return (
    <Fragment>
      <div className="mobile-toolbar w-100">
        <HiMenu size={28} color="#323232" className="mobile-tooolbar__menu pointer" />

        <div className="mobile-toolbar__brand">
          <img src="/static/logo.svg" alt="brand-logo" />
        </div>
      </div>
    </Fragment>
  )
}

export default MobileToolbar;