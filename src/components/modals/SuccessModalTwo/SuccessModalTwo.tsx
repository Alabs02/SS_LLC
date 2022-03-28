import { Modal } from 'src/components/core';
import { Fragment, useState } from 'react';

const SuccessModalTwo = () => {
  const SuccessMsg = 'Shipment has been successfully created';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Modal>
        <Modal.Cover
          isOpen={isOpen}
          showCloseBtn={true}
          onClose={() => setIsOpen(false)}
          variant="sm"
        >
          <Modal.Content>
            <div className="justify-content-center">
              <img src="/static/success.svg" alt="success" />
            </div>
            <div className="justify-content-center">
              <p className="mst-16 fw-normal ft-16 lh-22">{SuccessMsg}</p>
            </div>
            <div className="flex justify-content-center mst-37 msb-48">
              <button
                type="button"
                className="btn btn-tonic-light btn-md msr-13"
              >
                View Shipment List
              </button>
              <button type="button" className="btn btn-tonic btn-md">
                Proceed To Add Items
              </button>
            </div>
          </Modal.Content>
        </Modal.Cover>
      </Modal>
      <div className="grid place-items-center w-full h-full">
        <h4 className="mst-50">Success Modal Two</h4>
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

export { SuccessModalTwo as default };
