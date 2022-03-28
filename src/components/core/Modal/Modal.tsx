// STYLES
import './Modal.scss';

import { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { IoCloseCircleOutline } from 'react-icons/io5';
import 'animate.css';

// UTILS
import { isValidStr } from 'src/utils/helpers';

// INTERFACES
import { IChildren, ICover, IContent } from 'src/interfaces';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

class Modal extends Component {
  el: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  static Cover = (props: ICover) => {
    const coverClassnames = {
      'app-modal--auto': props.variant === 'auto',
      'app-modal--sm': props.variant === 'sm',
      'app-modal--md': props.variant === 'md',
      'app-modal--lg': props.variant === 'lg',
      'app-modal--full': props.variant === 'full',
    };

    return (
      <Fragment>
        {props.isOpen && (
          <div
            className={classnames(
              'app-modal animate__animated animate__fadeIn',
              coverClassnames
            )}
          >
            <div className="app-modal__overlay">
              <div className="app-modal__cover animate__animated animate__zoomIn app-modal__cover-delay round-2">
                <div className="app-modal__stick w-100">
                  <div className="app-modal__header">
                    {isValidStr(props.modalTitle) && (
                      <div className="app-modal__title justify-content-center fw-medium text-capitalize">
                        {props.modalTitle}
                      </div>
                    )}

                    {props.showCloseBtn && (
                      <div
                        onClick={props.onClose}
                        className="app-modal__close-btn"
                      >
                        <IoCloseCircleOutline
                          fontSize={25}
                          color={'#646464'}
                          className="app-modal__icon"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {props.children}
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  };

  static Content = (props: IContent) => {
    const contentClassnames = {
      'app-modal__content--auto': props.variant === 'auto',
      'app-modal__content--sm': props.variant === 'sm',
      'app-modal__content--md': props.variant === 'md',
      'app-modal__content--lg': props.variant === 'lg',
      'app-modal__content--full': props.variant === 'full',
    };

    return (
      <Fragment>
        <div className="app-modal__content">{props.children}</div>
      </Fragment>
    );
  };

  static Footer = (props: IChildren) => (
    <Fragment>
      <div className="app-modal__footer">{props.children}</div>
    </Fragment>
  );

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export { Modal as default };
