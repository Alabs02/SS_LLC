import { Fragment, useState } from 'react';
import { Breadcrumb } from 'src/components/core';
import { MobileToolbar } from 'src/components/navigation';
import { SuccessModal } from 'src/components/modals';
import { Formik, Form } from 'formik';

const EditClient = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const breadcrumbItems = [
    {
      to: '/shipments',
      title: 'Shipments',
    },
    {
      to: '/shipments/Clients',
      title: 'Clients',
    },
    {
      to: '/shipments/Clients/EditClient',
      title: "Edit Client's Details",
    },
  ];

  return (
    <Fragment>
      <MobileToolbar />

      <div className="top-nav">
        <div className="visible hide-md" />
        <div className="top-nav__breadcrumb hide visible-md">
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </div>

        <div className="top-nav__actions">
          <div className="top-nav__copy fw-normal ft-16">
            Acting as{' '}
            <span className="fw-medium top-nav__link app-text-primary pointer">
              John Doe
            </span>
          </div>
        </div>
      </div>

      <div className="card mst-48 border-0 round-0 msb-50">
        <div className="card__header fw-large ft-19 lh-28 ms-24 app-text-primary">
          Edit Client's Details
        </div>

        <Formik initialValues={{}} onSubmit={() => {}}>
          {(props) => (
            <Form className="form msl-24 msr-24 msb-24 mst-0">
              <div className="grid grid-col-12 gap-x-md-48 w-full">
                <div className="col-span-12 col-span-md-6 gap-x-md-46 msb-24">
                  <label
                    htmlFor="client__name"
                    className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="client__name"
                    className="app-form-control round-0 h-40"
                    placeholder={'name'}
                  />
                </div>

                <div className="col-span-12 col-span-md-6 msb-24">
                  <label
                    htmlFor="client__country"
                    className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                  >
                    Country/Territory
                  </label>
                  <select
                    name="client__country"
                    id="country"
                    className="w-100 app-form-control"
                  >
                    <option defaultValue={''}>Select Country</option>
                  </select>
                </div>

                <div className="col-span-12 col-span-md-6 gap-x-48 msb-24">
                  <div className="client__address">
                    <label
                      htmlFor="client__address"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="client__address"
                      className="app-form-control w-100 ft-15 h-40 lh-24 round-0"
                      placeholder={'address'}
                    />
                  </div>
                </div>

                <div className="col-span-12 col-span-md-3 gap-x-48 msb-24">
                  <div className="client__city">
                    <label
                      htmlFor="client__city"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="client__city"
                      placeholder={'city'}
                      className="app-form-control w-100 ft-15 h-40 lh-24 round-0"
                    />
                  </div>
                </div>

                <div className="col-span-12 col-span-md-3 msb-24">
                  <div className="client__state">
                    <label
                      htmlFor="client__state"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="client__state"
                      placeholder={'state'}
                      className="app-form-control w-100 h-40 lh-24 round-0"
                    />
                  </div>
                </div>

                <div className="col-span-12 col-span-md-6 msb-24 gap-x-48">
                  <div className="client__email">
                    <label
                      htmlFor="client__email"
                      className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="client__email"
                      placeholder={'email'}
                      className="app-form-control w-100 h-40 lh-24 round-0"
                    />
                  </div>
                </div>

                <div className="col-span-12 col-span-md-6 msb-24">
                  <label
                    htmlFor="client__phone"
                    className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                  >
                    Phone
                  </label>
                  <div className="w-full grid grid-col-12 gap-x-16">
                    <div className="col-span-12 col-span-md-2 msb-24">
                      <div className="client__phone-code w-full">
                        <input
                          type="text"
                          placeholder={'+123'}
                          className="app-form-control w-100 h-40 lh-24 round-0"
                        />
                      </div>
                    </div>

                    <div className="col-span-12 col-span-md-10 msb-24">
                      <div className="client__phone">
                        <input
                          type="text"
                          placeholder={'1234567890'}
                          className="app-form-control w-100 h-40 lh-24 round-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="section section--action w-full mst-24 ">
                <button
                  onClick={() => setIsOpen(true)}
                  type="button"
                  className="btn btn-tonic btn-lg"
                >
                  Update Client's Details
                </button>
              </section>
            </Form>
          )}
        </Formik>
      </div>

      {/* MODALS */}
      <SuccessModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        copy={'Client record has been successfully updated'}
      />
    </Fragment>
  );
};

export { EditClient as default };
