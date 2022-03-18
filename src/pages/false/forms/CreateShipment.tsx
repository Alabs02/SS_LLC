import { Fragment } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const CreateShipment = () => {
  return (
    <Fragment>
      <form className="form msl-24 msr-24 msb-24 mst-0">
        <div className="card mst-48 border-0 round-0 msb-50">
          <div className="card__header fw-large ft-19 lh-28 ms-24 app-text-primary">
            Create Shipment
          </div>

          <div className="msl-24 msb-24 msr-24">
            <div className="grid grid-col-12 gap-x-48 w-full">
              <div className="col-span-12 col-span-md-12 gap-x-46 msb-24">
                <label
                  htmlFor="shipment__description"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Shipment Description
                </label>
                <input
                  type="text"
                  name="shipment__description"
                  className="app-form-control round-0 h-40"
                />
              </div>

              <div className="col-span-12 col-span-md-2 msb-24">
                <label
                  htmlFor="shipment__dimension"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Dimensions (cm)
                </label>
                <input
                  type="number"
                  name="dimensions__length"
                  className="app-form-control round-0 h-40"
                  placeholder={'Length'}
                />
              </div>

              <div className="col-span-12 col-span-md-2 mst-32 msb-24">
                <input
                  type="number"
                  name="dimensions__width"
                  className="app-form-control round-0 h-40"
                  placeholder={'Width'}
                />
              </div>
              <div className="col-span-12 col-span-md-2 mst-32 msb-24">
                <input
                  type="number"
                  name="dimensions__height"
                  className="app-form-control round-0 h-40"
                  placeholder={'Height'}
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="gross__weight"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Gross Weight (kg)
                </label>
                <input
                  type="number"
                  name="gross__weight"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="delivery__option"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Delivery Option
                </label>
                <select
                  name="delivery__option"
                  className="w-100 app-form-control"
                >
                  <option selected>Parcel - to - door delivery</option>
                  <option value="">Office pick-up</option>
                </select>
              </div>
              <div className="col-span-12 col-span-md-6 msb-24">
                <label
                  htmlFor="source__office"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Source Office
                </label>
                <select
                  name="source__office"
                  className="w-100 app-form-control"
                >
                  <option selected>Minnesota, USA</option>
                  <option value="">Ikeja, Lagos, Nigeria</option>
                  <option value="">Ibadan, Lagos, Nigeria</option>
                </select>
              </div>
              <div className="col-span-12 col-span-md-6 msb-24">
                <label
                  htmlFor="destination__office"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Destination Office
                </label>
                <select
                  name="destination__office"
                  className="w-100 app-form-control"
                >
                  <option value="">Minnesota, USA</option>
                  <option selected>Ikeja, Lagos, Nigeria</option>
                  <option value="">Ibadan, lagos, Nigeria</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card mst-48 border-0 round-0 msb-24 app-text-tonic">
          <div className="warning__header mst-20 msl-29 fw-bold ft-16 lh-22">
            <AiOutlineExclamationCircle /> Important information
          </div>
          <div className="warning__text mst-8 msl-27 msb-18 fw-normal ft-16 lh-22">
            Note that all shipment items will be dropped off at the chosen
            source office.
          </div>
        </div>

        <section className="section section--action w-full mst-24 ">
          {/* <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                    </div> */}
          <button className="btn btn-tonic btn-lg">Create Shipment</button>
        </section>
      </form>
    </Fragment>
  );
};

export { CreateShipment as default };
