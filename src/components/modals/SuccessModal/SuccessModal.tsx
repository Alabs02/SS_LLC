// STYLES
import './SuccessModal.scss';
import { Modal } from 'src/components/core';
import { Fragment, useState } from 'react';

const SuccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const SuccessMsg = 'Recipient record has been created successfully.';
  return (
    <Fragment>
      <Modal>
        <Modal.Cover
          isOpen={isOpen}
          showCloseBtn={true}
          onClose={() => setIsOpen(false)}
        >
          <Modal.Content>
            <div className="justify-content-center">
              <img src="/static/success.svg" alt="success" />
            </div>
            <div className="justify-content-center">
              <p className="mst-16 fw-normal ft-16 lh-22">{SuccessMsg}</p>
            </div>
          </Modal.Content>
        </Modal.Cover>
      </Modal>
      <div className="grid place-items-center w-full h-full">
        <h4 className="mst-50">Success Modal One</h4>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-success text-capitalize"
        >
          test modal
        </button>
      </div>
    </Fragment>
  );
};

export { SuccessModal as default };
