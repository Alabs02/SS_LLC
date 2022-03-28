import { Fragment } from 'react';
import { Formik, Form } from 'formik';
import { NavLink } from 'react-router-dom';

// ICONS
import { RiErrorWarningLine } from 'react-icons/ri';

const CreateShipmentSection = () => {
  return (
    <Fragment>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form className="form msl-24 msr-24 msb-24 mst-0">
            <div className="grid grid-col-12 gap-y-16 gap-y-md-24">
              <div className="col-span-12">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Shipment Description
                </label>
                <input
                  type="text"
                  name="shipment__desc"
                  className="app-form-control round-0"
                  placeholder={''}
                />
              </div>

              <div className="col-span-12">
                <div className="grid grid-col-18 gap-y-16 gap-x-12 gap-x-md-32">
                  <div className="col-span-6 col-span-md-3">
                    <label
                      htmlFor="client__name"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                    >
                      Dimensions (cm)
                    </label>
                    <input
                      type="text"
                      name="shipment__dimension"
                      className="app-form-control round-0"
                      placeholder={''}
                    />
                  </div>

                  <div className="col-span-6 col-span-md-3">
                    <label
                      htmlFor="client__name"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                    >
                      Dimensions (cm)
                    </label>
                    <input
                      type="text"
                      name="shipment__dimension"
                      className="app-form-control round-0"
                      placeholder={''}
                    />
                  </div>

                  <div className="col-span-6 col-span-md-3">
                    <label
                      htmlFor="client__name"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                    >
                      Dimensions (cm)
                    </label>
                    <input
                      type="text"
                      name="shipment__dimension"
                      className="app-form-control round-0"
                      placeholder={''}
                    />
                  </div>

                  <div className="col-span-6 col-span-md-4">
                    <label
                      htmlFor="client__name"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                    >
                      Dimensions (cm)
                    </label>
                    <select
                      name="client__country"
                      id="country"
                      className="w-100 app-form-control"
                    >
                      <option defaultValue={''}>Select Country</option>
                    </select>
                  </div>

                  <div className="col-span-12 col-span-md-5">
                    <label
                      htmlFor="client__name"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                    >
                      Dimensions (cm)
                    </label>
                    <select
                      name="client__country"
                      id="country"
                      className="w-100 app-form-control"
                    >
                      <option defaultValue={''}>Select Country</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-span-12">
                <div className="grid grid-col-12 gap-x-md-32 gap-y-16 gap-y-md-24">
                  <div className="col-span-12 col-span-md-6">
                    <label
                      htmlFor="client__name"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                    >
                      Shipment Description
                    </label>
                    <input
                      type="text"
                      name="shipment__desc"
                      className="app-form-control round-0"
                      placeholder={''}
                    />
                  </div>

                  <div className="col-span-12 col-span-md-6">
                    <label
                      htmlFor="client__name"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                    >
                      Shipment Description
                    </label>
                    <input
                      type="text"
                      name="shipment__desc"
                      className="app-form-control round-0"
                      placeholder={''}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 mst-56">
              <div className="d-flex align-items-center">
                <RiErrorWarningLine
                  fontSize={20}
                  className="msr-10 app-text-tonic"
                />
                <span className="app-text-tonic fw-bold ft-16 lh-24">
                  Important information
                </span>
              </div>
              <div className="app-text-tonic fw-normal ft-16 lh-24">
                Note that all shipment items will be dropped off at the chosen
                source office.
              </div>
            </div>

            <div className="w-100 mst-54 grid place-items-center">
              <div className="d-flex flex-column align-items-center msb-24">
                <div className="msr-md-24 msb-16 msb-md-0">
                  <input type="checkbox" name="" className="ps-10 msr-16" />
                  <span className="fw-normal ft-16 lh-24">
                    I require packaging for my shipment
                  </span>
                </div>

                <div className="">
                  <input type="checkbox" name="" className="ps-10 msr-16" />
                  <span className="fw-normal ft-16 lh-24">
                    I require insurance for my shipment
                  </span>
                </div>
              </div>
              <div className="">
                <input type="checkbox" name="" className="ps-10 msr-16" />
                <span className="fw-normal ft-16 lh-24">
                  I agree to the{' '}
                  <NavLink to="">
                    <span className="app-text-primary">
                      Terms and Conditions
                    </span>
                  </NavLink>{' '}
                  and{' '}
                  <NavLink to="">
                    <span className="app-text-primary">Privacy Policy</span>
                  </NavLink>
                </span>
              </div>
            </div>

            <div className="w-100 grid place-items-center mst-36">
              <button className="btn btn-tonic h-auto psx-50 psy-15">
                Create Shipment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export { CreateShipmentSection as default };
