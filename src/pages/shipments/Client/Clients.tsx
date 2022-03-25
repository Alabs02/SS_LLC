// STYLES
import "./Clients.scss";

import { Fragment, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import useStore from "src/store";

import { ClientCard, Breadcrumb } from "src/components/core";
import { NavLink } from "react-router-dom";

export type IState = {
  userPayload: () => {},
}

const Clients = () => {
  let test = {};
  useStore(state => {
    test = {...state};
  });

  // console.table(test });

  // useEffect(() => {
  // }, []);

  const breadcrumbItems = [
    {
      to: "/shipments",
      title: "Shipments"
    },
    {
      to: "/shipments/Clients",
      title: "Clients"
    }
  ];

  return (
    <Fragment>
        <div className="top-nav">
          <div className="top-nav__breadcrumb">
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
          </div>
          <div className="top-nav__actions">
            <div className="top-nav__copy fw-normal ft-16">
              Acting as <span className="fw-medium top-nav__link app-text-primary pointer">John Doe</span>
            </div>
          </div>
        </div>

        <div className="fw-medium app-text-primary ft-18 lh-26 mst-16 msb-32">Search for Client</div>


        <section className="section section--searchbar msb-24 w-full">
          <div className="searchbar msr-8">
            <input
              type="text"
              className="form-control searchbar__input"
              placeholder="Enter Client's Name"
            />
            <RiSearchLine
              size={22}
              className="searchbar__icon app-text-gray-dark"
            />
          </div>

          <button className="btn btn-tonic-light searchbar__btn">Search</button>
        </section>

        <div className="mst-24 msb-12 fw-medium app-text-primary text-capitalize ft-18 lh-26">Most Recent</div>

        <section className="section section--clients w-full">
          <div className="grid grid-col-12 w-full">
            <div className="col-span-6">
              <ClientCard />
            </div>
          </div>
        </section>

        <section className="section section--action w-full mst-32">
          <NavLink to="/shipments/clients/register">
          <button className="btn btn-tonic btn-lg">
            Register a new client
          </button>
          </NavLink>
        </section>
    </Fragment>
  );
}

export default Clients;