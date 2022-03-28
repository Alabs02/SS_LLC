// STYLES
import './Details.scss';

import { Fragment } from 'react';
import { Breadcrumb } from 'src/components/core';
import { FiMoreVertical } from 'react-icons/fi';
import { MobileToolbar } from 'src/components/navigation';
import { useNavigate } from 'react-router-dom';

export const ShipmentItem = () => {
  return (
    <Fragment>
      <div className="app-card-flat w-full h-auto  msb-24">
        <section className="d-flex flex-row align-items-center justify-content-between msb-24">
          <div>
            <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
              Items Details
            </div>
            <div className="fw-medium app-text-default ft-15 lh-24">
              Item 1 - 10 pieces of HP Laptops
            </div>
          </div>

          <div className="d-grid place-items-center pointer more-btn hidden-md">
            <FiMoreVertical size={20} />
          </div>
        </section>

        <section className="w-full h-auto">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                Dimension
              </div>
              <div className="fw-medium app-text-default ft-15 lh-24">
                Length: 100cm
              </div>
              <div className="fw-medium app-text-default ft-15 lh-24">
                Width: 80cm
              </div>
              <div className="fw-medium app-text-default ft-15 lh-24">
                Height: 50cm
              </div>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                Gross Weight
              </div>
              <div className="fw-medium app-text-default ft-15 lh-24">
                64.73kg
              </div>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                Shipment Status
              </div>
              <div className="fw-medium  ft-15 lh-24">In Transit</div>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                Payment Status
              </div>
              <div className="badge badge-btn badge-primary-outline">
                In Transit
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

const Details = (): JSX.Element => {
  const navigate = useNavigate();
  const breadcrumbItems = [
    {
      to: '/shipments',
      title: 'Shipments',
    },
    {
      to: '/shipments/details/1',
      title: 'View Shipment',
    },
  ];

  return (
    <Fragment>
      <div className="w-full">
        <MobileToolbar />
      </div>

      <div className="w-full h-auto mst-34 msb-24">
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>

      <section className="w-full d-flex flex-column-reverse flex-md-row align-items-md-center justify-content-md-between msb-24">
        <div className="fw-semi-bold ft-22 lh-32 app-text-primary">
          Laptops bulk purchase (#54167812)
        </div>

        <div className="d-flex align-items-center msb-20 msb-md-0">
          <button
            onClick={() => navigate('invoice')}
            className="btn btn-sm app-bg-white btn-white-outline psy-8 psx-17 msr-16 w-full w-md-auto"
          >
            Generate Invoice
          </button>
          <button
            onClick={() => navigate('track-shipment')}
            type={'button'}
            className="btn btn-sm btn-success psy-8 psx-24 w-full w-md-auto"
          >
            Track shipment
          </button>
        </div>
      </section>

      <section className="w-full h-auto msb-24">
        <div className="app-card-flat">
          <section className="d-flex flex-row align-items-center justify-content-between msb-24">
            <div>
              <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                Shipment Description
              </div>
              <div className="fw-medium app-text-default ft-15 lh-24">
                Shipment contains 10 pieces of HP laptops and 20 pieces of Apple
                Macbooks
              </div>
            </div>

            <div className="d-grid place-items-center pointer more-btn hidden-md">
              <FiMoreVertical size={20} />
            </div>
          </section>

          <section className="w-full msb-24">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Date Shipped
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  03/10/2021
                </div>
              </div>

              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Expected Pickup Date
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  07/10/2021
                </div>
              </div>

              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Source Office
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Minnesota, U.S.A
                </div>
              </div>

              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Destination Office
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Ikeja, Lagos State, Nigeria
                </div>
              </div>
            </div>
          </section>

          <section className="w-full h-auto msb-24">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Dimension
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Length: 100cm
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Width: 80cm
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Height: 50cm
                </div>
              </div>

              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Gross Weight
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  64.73kg
                </div>
              </div>

              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Shipment Status
                </div>
                <div className="fw-medium  ft-15 lh-24">In Transit</div>
              </div>

              <div className="col-sm-12 col-md-3">
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Payment Status
                </div>
                <div className="badge badge-btn badge-success-outline">
                  Paid
                </div>
              </div>
            </div>
          </section>

          <section className="w-full h-auto">
            <div className="w-full d-flex flex-column flex-md-row align-items-md-start justify-content-md-between msb-24">
              <div>
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Date Shipped
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Ladi Onasanya
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  6391 Elgin St. Celina, Delaware 10299
                </div>
              </div>

              <div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  (316) 555-0116
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  ladi.onasanya@example.com
                </div>
              </div>
            </div>

            <div className="w-full d-flex flex-column flex-md-row align-items-md-start justify-content-md-between">
              <div>
                <div className="fw-normal app-text-secondary ft-13 lh-20 msb-8">
                  Recipient
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Tobiloba Adekunle
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  Ikeja, Lagos, Nigeria.
                </div>
              </div>

              <div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  +234 812 432 0028
                </div>
                <div className="fw-medium app-text-default ft-15 lh-24">
                  tobilobaadekunle07@gmail.com
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* {ITEMS} */}
      <ShipmentItem />
      <ShipmentItem />

      <div className="msb-46"></div>
    </Fragment>
  );
};

export { Details as default };
