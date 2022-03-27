import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENTS
import { RecipientCard } from 'src/components/core';


const SelectRecipientSection = () => {
  return (
    <Fragment>
      <section className="section section--clients w-full">
        <div className="grid grid-col-12 gap-x-30 gap-y-32 w-full">
          <div className="col-span-12 col-span-md-6">
            <RecipientCard />
          </div>
          <div className="col-span-12 col-span-md-6">
            <RecipientCard />
          </div>
          <div className="col-span-12 col-span-md-6">
            <RecipientCard />
          </div>
          <div className="col-span-12 col-span-md-6">
            <RecipientCard />
          </div>
        </div>
      </section>

      <section className="section section--action w-full mst-32">
        <NavLink to="/recipients/register">
          <button className="btn btn-tonic btn-lg">
            Register A New Recipient
          </button>
        </NavLink>
      </section>
    </Fragment>
  );
}

export { SelectRecipientSection as default };