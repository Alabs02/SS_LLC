// STYLES
import './SuccessModal.scss';

import { Fragment, Dispatch, SetStateAction } from 'react';
import { Modal } from 'src/components/core';

// ICONS
import { CheckSuccessIcon } from 'src/assets/icons';

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  copy?: string;
}

const SuccessModal = ({ isOpen, setIsOpen, copy }: IProps): JSX.Element => {
  return (
    <Fragment>
      <Modal>
        <Modal.Cover
          isOpen={isOpen}
          showCloseBtn={true}
          variant={'sm'}
          onClose={() => setIsOpen(false)}
        >
          <Modal.Content variant={'sm'}>
            <div className="success-modal">
              <CheckSuccessIcon />

              <div className="success-modal__copy mst-16 ft-16 lh-24 msb-40">
                {copy && copy}
              </div>
            </div>
          </Modal.Content>
        </Modal.Cover>
      </Modal>
    </Fragment>
  );
};

export { SuccessModal as default };
