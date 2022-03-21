import { Fragment } from "react";
import { Breadcrumb } from "../../../components/core";
import { MobileToolbar } from "../../../components/navigation";


const RegisterClient = () => {

  const breadcrumbItems = [
    {
      to: "/shipments",
      title: "Shipments"
    },
    {
      to: "/shipments/clients",
      title: "Clients"
    },
    {
      to: "/shipments/clients/register",
      title: "Register a new client"
    }
  ];

  return (
    <Fragment>
      <MobileToolbar />

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

      <div className="card mst-48 border-0 round-0 msb-50">
        <div className="card__header fw-large ft-19 lh-28 ms-24 app-text-primary">
          Register a new client
        </div>


        <form className="form msl-24 msr-24 msb-24 mst-0">
          <div className="grid grid-col-12 gap-x-48 w-full">
            <div className="col-span-12 col-span-md-6 gap-x-46 msb-24">
              <label htmlFor="client__name" className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 ">Name</label>
              <input
              type="text"
              name="client__name"
              className="app-form-control round-0 h-40"
              placeholder={'name'} />
            </div>

            <div className="col-span-12 col-span-md-6 msb-24">
              <label htmlFor="client__country" className="form-label ms-0 msb-8 fw-normal ft-13 lh-20">Country/Territory</label>
              <select name="client__country" id="country" className="w-100 app-form-control">
                <option selected>Select Country</option>
              </select>
            </div>

            <div className="col-span-12 col-span-md-6 gap-x-48 msb-24">
              <div className="client__address">
                <label htmlFor="client__address" className="form-label ms-0 msb-8 fw-normal ft-13 lh-20">Address</label>
                <input
                type="text"
                name="client__address"
                className="app-form-control w-100 ft-15 h-40 lh-24 round-0"
                placeholder={'address'} />
              </div>
            </div>

            <div className="col-span-12 col-span-md-3 gap-x-48 msb-24">
              <div className="client__city">
                <label htmlFor="client__city" className="form-label ms-0 msb-8 fw-normal ft-13 lh-20">City</label>
                <input
                type="text"
                name="client__city"
                placeholder={'city'}
                className="app-form-control w-100 ft-15 h-40 lh-24 round-0" />
              </div>
            </div>

            <div className="col-span-12 col-span-md-3 msb-24">
              <div className="client__state">
                <label htmlFor="client__state" className="form-label ms-0 msb-8 fw-normal ft-13 lh-20">State</label>
                <input
                type="text"
                name="client__state"
                placeholder={'state'}
                className="app-form-control w-100 h-40 lh-24 round-0" />
              </div>
            </div>

            <div className="col-span-12 col-span-md-6 msb-24 gap-x-48">
              <div className="client__email">
                <label htmlFor="client__email" className="form-label ms-0 msb-8 fw-normal ft-13 lh-20">Email Address</label>
                <input
                type="email"
                name="client__email"
                placeholder={'email'}
                className="app-form-control w-100 h-40 lh-24 round-0" />
              </div>
            </div>

            <div className="col-span-12 col-span-md-6 msb-24">
              <label htmlFor="client__phone" className="form-label ms-0 msb-8 fw-normal ft-13 lh-20">Phone</label>
              <div className="w-full grid grid-col-12 gap-x-16">
                <div className="col-span-12 col-span-md-2 msb-24">
                  <div className="client__phone-code w-full">
                    <input
                    type="text"
                    placeholder={'+123'}
                    className="app-form-control w-100 h-40 lh-24 round-0" />
                  </div>
                </div>

                <div className="col-span-12 col-span-md-10 msb-24">
                  <div className="client__phone">
                    <input
                    type="text"
                    placeholder={'1234567890'}
                    className="app-form-control w-100 h-40 lh-24 round-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section section--action w-full mst-24 ">
            <button className="btn btn-tonic btn-lg">
              Register Client
            </button>
          </section>
        </form>
      </div>
    </Fragment>
  );
}

export default RegisterClient;