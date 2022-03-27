// STYLES
import './TrackingBar.scss';

import { Fragment } from 'react';

import { FaBox, FaTruck, FaCheckCircle } from 'react-icons/fa';


const TrackingBar = () => {
  return (
    <Fragment>
      <div className="tracking-bar tracking-bar__bar--active">
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
            <FaCheckCircle size={14} color={'#fff'} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { TrackingBar as default };