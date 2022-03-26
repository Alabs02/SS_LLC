// STYLES
import './View.scss';

import { FC, Fragment, useState } from 'react';
import { NoEntity } from 'src/components/core';
import { ShipmentToolBar } from 'src/components/navigation';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const View: FC = () => {
  const [shipments, setShipment] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const isEmpty = shipments.length === 0;

  const isEven = (num: number) => {
    return num % 2 === 0 ? true : false;
  };

  const renderTableData = () => {
    return shipments.map((shipment, index) => (
      <tr key={index} className="pointer">
        <td>#56483883</td>
        <td>Laptop</td>
        <td>Tobiloba Adekunle</td>
        <td>Lagos, Nigeria</td>
        <td>30-10-2022</td>
        {isEven(index) ? (
          <td>
            <div className="badge badge-btn badge-success-outline">Paid</div>
          </td>
        ) : (
          <td>
            <div className="badge badge-btn badge-gray-outline">Pending</div>
          </td>
        )}
      </tr>
    ));
  };

  return (
    <Fragment>
      <ShipmentToolBar />

      <section className="section w-full mst-16 msb-28">
        <div className="fw-medium ft-17 lh-28">Track Shipments</div>
        <div className="search d-flex align-items-start">
          <input
            type="text"
            name="search"
            className="search__input fw-medium"
            placeholder="Input Shipment ID"
          />
          <button className="btn-success-darker search__btn d-grid place-items-center ft-13 fw-medium lh-20">
            Track
          </button>
        </div>
      </section>

      <section className="section section--panel w-full d-flex flex-md-row align-items-center justify-content-between msb-16">
        <div className="fw-medium lh-28 ft-17">Shipments History</div>

        <div className="d-flex align-items-center">
          <p className="m-0 msr-10 fw-normal ft-13 sort-label">Sort by</p>
          <select name="sort_shipments" className="form-select form-select-sm">
            <option defaultValue={''}>Created shipments</option>
          </select>
        </div>
      </section>

      <section className="section section--table msb-72">
        <div className="w-full h-auto app-table__responsive">
          <table className="app-table app-table--primary table-responsive">
            <thead>
              <tr>
                <th scope="col">Shipment ID</th>
                <th scope="col">Shipment Title</th>
                <th scope="col">Recipient</th>
                <th scope="col">Destination</th>
                <th scope="col">Date of Creation</th>
                <th scope="col">Payment Status</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              {!isEmpty && renderTableData()}
            </tbody>
          </table>
          {isEmpty && (
            <div className="app-table__noentity">
              <NoEntity
                imgUrl="/static/no-shipments.svg"
                heading="Sorry, you have not created any shipments yet"
                subheading="When you create new shipments, they will appear here"
              />
            </div>
          )}
        </div>

        {isEmpty && (
          <div className="d-flex w-full justify-content-end mst-32 w-full">
            <button className="pagination-btn fw-normal">
              <RiArrowLeftSLine size={20} />
            </button>

            <div className="pagination-container">
              <button className="pagination-btn pagination-btn--active pagination-item fw-normal">
                1
              </button>
              <button className="pagination-btn pagination-item fw-normal">
                2
              </button>
              <button className="pagination-btn pagination-item fw-normal">
                3
              </button>
              <button className="pagination-btn pagination-item fw-normal">
                4
              </button>
            </div>

            <button className="pagination-btn fw-normal">
              <RiArrowRightSLine size={20} />
            </button>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default View;
