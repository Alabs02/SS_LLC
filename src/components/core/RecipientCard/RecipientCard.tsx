import { Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// ICONS
import { TrashIcon } from 'src/assets/icons';

const RecipientCard = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <button className="client-card ps-20">
        <div className="client-card__body">
          <div className="client-card__avatar app-bg-tonic-light msr-24">
            <span className="fw-medium ft-28 lh-40">JD</span>
          </div>

          <div className="client-card__content">
            <div className="client-card__heading ft-18 lh-26 fw-normal text-left">
              John Deo
            </div>
            <div className="client-card__subheading ft-15 lh-22 fw-normal mst-8">
              000, XYZ Street, Ikeja, Lagos, Nigeria
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/shipments/create-shipment')}
          className="client-card__circle-trash"
        >
          <TrashIcon />
        </button>

        <NavLink to="/recipients/edit/1">
          <button className="btn-primary-flat client-card__btn">Edit</button>
        </NavLink>
      </button>
    </Fragment>
  );
};

export default RecipientCard;
