// STYLES
import './Invoice.scss';

import { Fragment } from 'react';

// ICONS
import { FaPrint, FaDownload } from 'react-icons/fa';

// COMPONENTS
import { Breadcrumb } from 'src/components/core';
import { MobileToolbar } from 'src/components/navigation';
import { NoEntity } from 'src/components/core';


const Invoice = () => {
  const breadcrumbItems = [
    {
      to: '/shipments',
      title: 'Shipments',
    },
    {
      to: '/shipments/details/1',
      title: 'View Shipment',
    },
    {
      to: '/shipments/details/1/invoice',
      title: "Invoice",
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

      <div className="app-text-primary fw-semi-bold ft-23 lh-32 msy-32">INV-0012</div>

      <div className="card invoice-card ps-24 msb-36">
        <div className="w-100 grid grid-col-15 gap-x-40 gap-y-30">

          <div className="col-span-15 col-span-md-4">
            <div className="ft-16 lh-24 fw-normal msb-24"><span className="app-text-gray-dark">Billled To:</span> Tobiloba Adekunle</div>
            <div className="ft-16 lh-24 fw-normal app-text-gray-dark msb-8">Address</div>
            <div className="ft-16 lh-24 fw-normal">68, XYZ Street, Ikeja, Lagos, Nigeria</div>
          </div>

          <div className="col-span-15 col-span-md-4">
            <div className="ft-16 lh-24 fw-normal msb-24"><span className="app-text-gray-dark">Due Date:</span> 30/10/2021</div>
            <div className="ft-16 lh-24 fw-normal app-text-gray-dark msb-8">Email</div>
            <div className="ft-16 lh-24 fw-normal">tobilobaadekunle07@gmail.com</div>
          </div>

          <div className="col-span-15 col-span-md-4 d-flex flex-column justify-content-end">
            <div className="ft-16 lh-24 fw-normal app-text-gray-dark msb-8">Phone</div>
            <div className="ft-16 lh-24 fw-normal">+234 812 432 0028</div>
          </div>

          <div className="col-span-15 col-span-md-3 d-flex flex-column align-items-md-end invoice-card_border">
            <div className="pst-30 pst-md-0">
              <div className="ft-16 lh-24 fw-normal msb-24"><span className="app-text-gray-dark">Invoice No:</span> INV-0012</div>
              <div className="ft-16 lh-24 fw-normal app-text-gray-dark msb-8 d-flex align-items-center">
                <span className="msr-8">Status:</span>
                <div className="badge badge-btn badge-success-outline fw-bold psx-16">Paid</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <section className="section section--table msb-36">
        <div className="w-full h-auto app-table__responsive">
          <table className="app-table app-table--primary table-responsive">
            <thead>
              <tr>
                <th scope="col">Item Description</th>
                <th scope="col">Price Type</th>
                <th scope="col">Cost</th>
                <th scope="col">Quantity</th>
                <th scope="col">Task</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              <tr className="pointer">
                <td>10 pieces of HP Laptops</td>
                <td>Cost / Kg</td>
                <td>$78.50</td>
                <td>10</td>
                <td>$0.00</td>
                <td>$78.50</td>
              </tr>

              <tr className="pointer">
                <td>20 pieces of HP Laptops</td>
                <td>Cost / Kg</td>
                <td>$78.50</td>
                <td>10</td>
                <td>$0.00</td>
                <td>$78.50</td>
              </tr>
              {/* {!isEmpty && renderTableData()} */}
            </tbody>
          </table>
          <div className="w-100 bg-white">
            <div className="app-table__tfoot d-flex align-items-center justify-content-between">
              <div className="app-text-primary fw-semi-bold ft-20 lh-28">Total</div>
              <div className="fw-semi-bold ft-20 lh-28 invoice-card__tfoot">$133.00</div>
            </div>
          </div>

          {false && (
            <div className="app-table__noentity">
              <NoEntity
                imgUrl="/static/no-shipments.svg"
                heading="Sorry, you have not created any shipments yet"
                subheading="When you create new shipments, they will appear here"
              />
            </div>
          )}
        </div>
      </section>

      <section className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-end msb-100">
        <button className="btn app-bg-white btn-white-outline psy-12 psx-20 msr-md-16 msb-16 msb-md-0 w-full w-md-auto round-5 d-flex align-items-center">
          <FaPrint className="msr-16" />
          <span>Print</span>
        </button>

        <button className="btn app-bg-white btn-white-outline psy-12 psx-20 w-full w-md-auto round-5 d-flex align-items-center">
          <FaDownload className="msr-16" />
          <span>Download As PDF</span>
        </button>
      </section>
    </Fragment>
  );
}

export { Invoice as default };