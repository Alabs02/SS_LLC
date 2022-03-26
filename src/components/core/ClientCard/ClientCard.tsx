// STYLES
import './ClientCard.scss';

import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const ClientCard = () => {
  return (
    <Fragment>
      <div className="client-card ps-20">
        <div className="client-card__body">
          <div className="client-card__avatar app-bg-tonic-light msr-24">
            <span className="fw-medium ft-28 lh-40">JD</span>
          </div>

          <div className="client-card__content">
            <div className="client-card__heading ft-18 lh-26 fw-normal">
              John Deo
            </div>
            <div className="client-card__subheading ft-15 lh-22 fw-normal mst-8">
              000, XYZ Street, Ikeja, Lagos, Nigeria
            </div>
          </div>
        </div>

        <NavLink to="/shipments/clients/edit/:client">
          <button className="btn-primary-flat client-card__btn">Edit</button>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default ClientCard;
