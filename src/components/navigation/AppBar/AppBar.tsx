// STYLES
import "./AppBar.scss";

import { FC, Fragment } from "react";
import { IoChevronDown } from "react-icons/io5";

// UTILS
import { getAuthUser, trimString } from "../../../utils/helpers";

const AppBar: FC = () => {
  return (
    <Fragment>
      <div className="appbar">
        <div className="appbar-brand">
          <img src="/static/logo.svg" alt="brand-logo" />
        </div>

        <div className="appbar-navigation">
          <button className="text-btn">
            <div className="text-btn-icon">
              <img src="/static/icon-help.svg" alt="" />
            </div>
            <div className="text-btn-title">Help</div>
          </button>

          <button className="dropdown-btn">
            <div className="dropdown-btn__avatar text-uppercase fw-medium msr-8">
              {trimString(getAuthUser.first_name, 2, false)}
            </div>
            <div className="fw-medium dropdown-btn__copy msr-12">Hello, <span className="fw-semi-bold">{getAuthUser.first_name}</span></div>
            <IoChevronDown />
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default AppBar;