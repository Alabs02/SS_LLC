import { Fragment } from 'react';

const AddItems = () => {
  return (
    <Fragment>
      <form className="form msl-24 msr-24 msb-24 mst-0">
        <div className="card mst-48 border-0 round-0 msb-50">
          <div className="card__header fw-large ft-19 lh-28 ms-24 app-text-primary">
            Item 1
          </div>
          <div className="msl-24 msb-24 msr-24">
            <div className="grid grid-col-12 gap-x-48 w-full">
              <div className="col-span-12 col-span-md-3 gap-x-46 msb-24">
                <label
                  htmlFor="item__category"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Item Category
                </label>
                <input
                  type="text"
                  name="item__category"
                  className="app-form-control round-0 h-40"
                  placeholder={'No Item Selected'}
                />
              </div>
              <div className="col-span-12 col-span-md-9 msb-24 category__modal ft-12 fw-normal lh-14 app-text-primary">
                Select Category{'>'}
              </div>
              <div className="col-span-12 col-span-md-12 msb-24">
                <label
                  htmlFor="item__description"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Item Description
                </label>
                <input
                  type="text"
                  name="item__description"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="item__source"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Item Source
                </label>
                <input
                  type="text"
                  name="item__source"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="order__number"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Order Number
                </label>
                <input
                  type="text"
                  name="order__number"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="tracking__number"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Tracking Number
                </label>
                <input
                  type="text"
                  name="tracking__number"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="item__worth"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Item Worth (USD)
                </label>
                <input
                  type="text"
                  name="item__worth"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="item__quantity"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="item__quantity"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-3 msb-24">
                <label
                  htmlFor="gross__weight"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Gross Weight (KG)
                </label>
                <input
                  type="number"
                  name="gross__weight"
                  className="app-form-control round-0 h-40"
                />
              </div>
              <div className="col-span-12 col-span-md-6 msb-24">
                <label
                  htmlFor="item__dimensions"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Dimensions (cm)
                </label>
                <div className="grid grid-col-12 gap-x-48 w-full">
                  <div className="col-span-12 col-span-md-3 gap-x-46 msb-24">
                    <input
                      type="text"
                      name="item__length"
                      className="app-form-control round-0 h-40"
                      placeholder={'Length'}
                    />
                  </div>
                  <div className="col-span-12 col-span-md-3 gap-x-46 msb-24">
                    <input
                      type="text"
                      name="item__width"
                      className="app-form-control round-0 h-40"
                      placeholder={'Width'}
                    />
                  </div>
                  <div className="col-span-12 col-span-md-3 gap-x-46 msb-24">
                    <input
                      type="text"
                      name="item__height"
                      className="app-form-control round-0 h-40"
                      placeholder={'Height'}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 col-span-md-4 msb-24">
                <label
                  htmlFor="courier__service"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Courier Service
                </label>
                <select
                  name="courier__service"
                  className="w-100 app-form-control"
                >
                  <option value="">FedEx</option>
                  <option value="">DHL</option>
                  <option value="">UPS</option>
                </select>
              </div>
              <div className="col-span-12 col-span-md-4 msb-24">
                <label
                  htmlFor="service__type"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Service Type
                </label>
                <select name="service__type" className="w-100 app-form-control">
                  <option value="">Express</option>
                  <option value="">Standard</option>
                </select>
              </div>
              <div className="col-span-12 col-span-md-4 msb-24">
                <label
                  htmlFor="drop-off__options"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20"
                >
                  Drop-off Options
                </label>
                <select
                  name="drop-off__options"
                  className="w-100 app-form-control"
                >
                  <option value="">Office Drop-off</option>
                  <option value="">Home Pickup</option>
                </select>
              </div>
              <div className="d-flex align-items-end justify-content-">
                <button className="btn btn-primary bt-md">
                  + Add Another Item
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="section section--action w-full mst-24 ">
          <button className="btn btn-tonic btn-lg">Continue</button>
        </section>
      </form>
    </Fragment>
  );
};

export { AddItems as default };
