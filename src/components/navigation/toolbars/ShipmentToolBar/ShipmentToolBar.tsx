import { FC, Fragment } from "react";
import { HiMenu } from "react-icons/hi";
import "./ShipmentToolBar.scss";

const ShipmentToolBar: FC = () => {
  return (
    <Fragment>
      <div className="mini-app-bar">
        <div className="mini-app-bar__section">
          <HiMenu size={28} color="#323232" className="mini-app-bar__menu pointer" />
          <div className="appbar-brand">
            <img src="/static/logo.svg" alt="brand-logo" />
          </div>
        </div>
        <button className="btn btn-tonic">Create a new shipment</button>
      </div>
    </Fragment>
  );
}

export default ShipmentToolBar;