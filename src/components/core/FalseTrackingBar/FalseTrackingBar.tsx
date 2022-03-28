import { Fragment } from 'react';

import { FaBox, FaTruck, FaCheckCircle } from 'react-icons/fa';

const FalseTrackingBar = () => {
  return (
    <Fragment>
      <div className="tracking-bar tracking-bar__bar--inactive">
        <div className="tracking-bar__item tracking-bar--active">
          <div className="tracking-bar__item-inner tracking-bar--active-dark">
            <FaBox size={14} color={'#fff'} />
          </div>
        </div>

        <div className="tracking-bar__item tracking-bar--active">
          <div className="tracking-bar__item-inner tracking-bar--active-dark">
            <FaTruck size={14} color={'#fff'} />
          </div>
        </div>

        <div className="tracking-bar__item tracking-bar--active">
          <div className="tracking-bar__item-inner tracking-bar--active-dark">
            <FaTruck size={14} color={'#fff'} />
          </div>
        </div>

        <div className="tracking-bar__item tracking-bar--inactive">
          <div className="tracking-bar__item-inner tracking-bar--inactive-dark">
            <FaCheckCircle size={14} color={'#fff'} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { FalseTrackingBar as default };
