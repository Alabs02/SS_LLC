// STYLES
import "./Modal.scss";

import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import "animate.css";

// UTILS
import { isValidStr } from "../../../utils/helpers";

// INTERFACES
import { IChildren, ICover } from "../../../interfaces";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

class Modal extends Component {
  el: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  static Cover = (props: ICover) => (
    <Fragment>
      {props.isOpen && (
        <div className="app-modal animate__animated animate__fadeIn app-modal--md">
          <div className="app-modal__overlay">
            <div className="app-modal__cover animate__animated animate__zoomIn app-modal__cover-delay round-2">
              <div className="app-modal__header">
                {isValidStr(props.modalTitle) && (
                  <div className="app-modal__title justify-content-center fw-medium text-capitalize">{props.modalTitle}</div>
                )}

                {props.showCloseBtn && (
                  <div onClick={props.onClose} className="app-modal__close-btn">
                    <IoCloseCircleOutline fontSize={25} color={"#646464"} className="app-modal__icon" />
                  </div>
                )}
              </div>

              {props.children}

            </div>
          </div>
        </div>
      )}
    </Fragment>
  );

  static Content = (props: IChildren) => (
    <Fragment>
      <div className="app-modal__content">
        {props.children}

      </div>
    </Fragment>
  );

  static Footer = (props: IChildren) => (
    <Fragment>
      <div className="app-modal__footer">
        {props.children}
      </div>
    </Fragment>
  );

  render() {
    return createPortal(
      this.props.children,
      this.el
    );
  }
}

export { Modal as default };