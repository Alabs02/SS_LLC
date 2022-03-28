import { Fragment } from 'react';

const ShipmentSummary = () => {
  return (
    <Fragment>
      <div className='w-100 d-flex flex-column msb-24'>
        <span className='fw-bold app-text-primary'>Shipment Summary</span>
        <span className='fw-normal lh-24 ft-16 app-text-dark'>
        Shipment contains 10 pieces of HP laptops and 20 pieces of Apple Macbooks - #54165413
        </span>
      </div>

      <div className="grid grid-col-16 msb-24">
        <div className="d-flex flex-column col-span-8 msb-24 col-span-md-4">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Date Shipped</span>
          <span className='fw-normal lh-24 ft-16 app-text-dark'>03/10/2021</span>
        </div>

        <div className="d-flex flex-column col-span-8 msb-24 col-span-md-4">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Expected Pickup Date</span>
          <span className='fw-normal lh-24 ft-16 app-text-dark'>07/10/2021</span>
        </div>

        <div className="d-flex flex-column col-span-8 col-span-md-4">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Source Office</span>
          <span className='fw-normal lh-24 ft-16 app-text-dark'>Minnesota, U.S.A</span>
        </div>

        <div className="d-flex flex-column col-span-8 col-span-md-4">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Destination Office</span>
          <span className='fw-normal lh-24 ft-16 app-text-dark'>Ikeja, Lagos State, Nigeria</span>
        </div>
      </div>

      <div className="grid grid-col-12 msb-24">
        <div className="d-flex flex-column col-span-6 col-span-md-3">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Dimension</span>
          <div className='d-flex flex-column'>
            <span className='fw-normal lh-24 ft-16 app-text-dark'>Length: 100cm</span>
            <span className='fw-normal lh-24 ft-16 app-text-dark'>Width: 80cm</span>
            <span className='fw-normal lh-24 ft-16 app-text-dark'>Height: 50 cm</span>
          </div>
        </div>

        <div className="d-flex flex-column col-span-6 col-span-md-9">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Gross Weight</span>
          <span className='fw-normal lh-24 ft-16 app-text-dark'>64.73kg</span>
        </div>
      </div>

      <div className="grid grid-col-12 msb-24">
        <div className="d-flex flex-column col-span-12 col-span-md-6">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Items Details</span>
          <div className='d-flex flex-column'>
            <span className='fw-normal lh-24 ft-16 app-text-dark'>Item 1 - 10 pieces of HP Laptops</span>
            <span className='fw-normal lh-24 ft-16 app-text-dark'>Item 2 - 20 pieces of Apple Macbooks</span>
          </div>
        </div>
      </div>

      <div className="grid grid-col-12 msb-24">
        <div className="d-flex flex-column col-span-12 col-span-md-9">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Shipped By</span>
          <div className='d-flex flex-column'>
            <span className='fw-normal lh-24 ft-16 app-text-dark'>Ladi Onasanya</span>
            <span className='fw-normal lh-24 ft-16 app-text-dark msb-24 msb-md-0'>6391 Elgin St. Celina, Delaware 10299</span>
          </div>
        </div>

        <div className="d-flex flex-column col-span-3">
          <span className='fw-normal lh-24 ft-16 app-text-dark'>(316) 555-0116</span>
          <span className='fw-normal lh-24 ft-16 app-text-dark'>ladi.onasanya@example.com</span>
        </div>
      </div>

      <div className="grid grid-col-12 msb-60">
        <div className="d-flex flex-column col-span-12 col-span-md-9">
          <span className='ft-14 fw-normal lh-20 app-text-gray-dark'>Recipient</span>
          <div className='d-flex flex-column'>
            <span className='fw-normal lh-24 ft-16 app-text-dark'>
              Tobiloba Adekunle
            </span>
              <span className='fw-normal lh-24 ft-16 app-text-dark msb-24 msb-md-0'>Ikeja, Lagos, Nigeria.</span>
          </div>
        </div>

        <div className="d-flex flex-column col-span-3">
          <span className='fw-normal lh-24 ft-16 app-text-dark'>+234 812 432 0028</span>
          <span className='fw-normal lh-24 ft-16 app-text-dark'>tobilobaadekunle07@gmail.com</span>
        </div>
      </div>

      <div className="w-100 grid place-items-center msb-58">
        <button className="btn btn-tonic h-auto psx-50 psy-15">
          Done
        </button>
      </div>
    </Fragment>
  );
};

export { ShipmentSummary as default };
