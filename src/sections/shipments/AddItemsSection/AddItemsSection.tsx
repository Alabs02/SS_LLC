import { Fragment } from 'react';

// ICONS
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';

const AddItemsSection = () => {
  return (
    <Fragment>
      <div className="w-100 app-bg-white ps-24 msb-32">
        <div className="app-text-primary fs-semi-bold ft-20 lh-28 msb-24">
          Item 1
        </div>

        <div className="grid grid-col-12 gap-y-16 gap-y-md-24 gap-x-md-32">
          <div className="col-span-12">
            <div className="grid grid-col-12 gap-x-16 gap-x-md-24 align-items-center">
              <div className="col-span-8 col-span-md-3">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Item Category
                </label>
                <input
                  type="text"
                  name="shipment__dimension"
                  className="app-form-control round-0"
                  placeholder={'No Category Selected'}
                />
              </div>

              <div className="col-span-4 col-span-md-3">
                <div className="app-text-primary fs-12 lh-16 pointer mst-30">Select Category {'>'} </div>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <label
              htmlFor="client__name"
              className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
            >
              Item Description
            </label>
            <input
              type="text"
              name="shipment__dimension"
              className="app-form-control round-0"
              placeholder={''}
            />
          </div>

          <div className="col-span-12">
            <div className="grid grid-col-12 gap-y-16 gap-y-md-24 gap-x-md-32">
              <div className="col-span-12 col-span-md-3">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Item Source
                </label>
                <input
                  type="text"
                  name="item_source"
                  className="app-form-control round-0"
                  placeholder={''}
                />
              </div>

              <div className="col-span-12 col-span-md-3">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Order Number
                </label>
                <input
                  type="text"
                  name="item_source"
                  className="app-form-control round-0"
                  placeholder={''}
                />
              </div>

              <div className="col-span-12 col-span-md-3">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Tracking Number
                </label>
                <input
                  type="text"
                  name="item_source"
                  className="app-form-control round-0"
                  placeholder={''}
                />
              </div>

              <div className="col-span-12 col-span-md-3">
                <div className="w-100 d-flex align-items-center justify-content-between">
                  <label
                    htmlFor="client__name"
                    className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                  >
                    Item Worth (USD)
                  </label>

                  <MdOutlineKeyboardArrowDown fontSize={15} />
                </div>

                <input
                  type="text"
                  name="item_source"
                  className="app-form-control round-0"
                  inputMode={'numeric'}
                  placeholder={''}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="grid grid-col-12 gap-y-16 gap-y-md-24 gap-x-32 align-items-end">
              <div className="col-span-6 col-span-md-3">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="item_source"
                  className="app-form-control round-0"
                  placeholder={''}
                  defaultValue={'10'}
                />
              </div>

              <div className="col-span-6 col-span-md-3">
                <div className="w-100 d-flex align-items-center justify-content-between">
                  <label
                    htmlFor="client__name"
                    className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                  >
                    Gross Weight (kg)
                  </label>

                  <MdOutlineKeyboardArrowDown fontSize={15} />
                </div>
                <input
                  type="text"
                  name="item_source"
                  className="app-form-control round-0"
                  placeholder={''}
                  defaultValue={'60'}
                />
              </div>

              <div className="col-span-12 col-span-md-6">
                <div className="w-100 d-flex align-items-center justify-content-between">
                  <label
                    htmlFor="client__name"
                    className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                  >
                    Dimensions (cm)
                  </label>

                  <MdOutlineKeyboardArrowDown fontSize={15} />
                </div>

                <div className="grid grid-col-12 gap-y-md-24 gap-x-8 gap-x-md-32 align-items-end">
                  <div className="col-span-4">
                    <input
                      type="text"
                      name="item_source"
                      className="app-form-control round-0"
                      inputMode={'numeric'}
                      placeholder={''}
                      defaultValue={'Length 100'}
                    />
                  </div>

                  <div className="col-span-4">
                    <input
                      type="text"
                      name="item_source"
                      className="app-form-control round-0"
                      inputMode={'numeric'}
                      placeholder={''}
                      defaultValue={'Width 80'}
                    />
                  </div>

                  <div className="col-span-4">
                    <input
                      type="text"
                      name="item_source"
                      className="app-form-control round-0"
                      inputMode={'numeric'}
                      placeholder={''}
                      defaultValue={'Height 50'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="grid grid-col-12 gap-y-16 gap-y-md-24 gap-x-md-32">
              <div className="col-span-12 col-span-md-4">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Courier Service
                </label>
                <select name="add_courier" className="w-100 app-form-control">
                  <option defaultValue={''}>FedEx</option>
                </select>
              </div>

              <div className="col-span-12 col-span-md-4">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Service Type
                </label>
                <select
                  name="add_serice_type"
                  className="w-100 app-form-control"
                >
                  <option defaultValue={''}>Express</option>
                </select>
              </div>

              <div className="col-span-12 col-span-md-4">
                <label
                  htmlFor="client__name"
                  className="form-label ms-0 msb-8 fw-normal ft-13 lh-20 "
                >
                  Drop-off Options
                </label>
                <select
                  name="add_drop_off_type"
                  className="w-100 app-form-control"
                >
                  <option defaultValue={''}>Office Drop-off</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 grid justify-content-end">
        <button className="btn btn-primary h-auto msy-24">
          <BsPlus fontSize={14} className="app-text-white msr-16" />
          <span>Add Another Item</span>
        </button>
      </div>
    </Fragment>
  );
};

export { AddItemsSection as default };
