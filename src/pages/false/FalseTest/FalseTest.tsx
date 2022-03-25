import { Fragment, useState } from "react";
import { Modal } from "src/components/core";


const FalseTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Modal>
        <Modal.Cover
          isOpen={isOpen}
          showCloseBtn={true}
          onClose={() => setIsOpen(false)}
        >
          <Modal.Content>
            <div>
              <h1>Hello</h1>
            </div>
          </Modal.Content>

          <Modal.Footer>
            <button className="btn btn-primary btn-sm msr-20">Save</button>
            <button className="btn btn-tonic-light btn-sm">Close</button>
          </Modal.Footer>
        </Modal.Cover>
      </Modal>
      <div className="grid place-items-center w-full h-full">
        <h4 className="mst-50">False Entry</h4>
        <button onClick={() => setIsOpen(true)} className="btn btn-success text-capitalize">test modal</button>
        
      </div>
    </Fragment>
  );
}

export { FalseTest as default };