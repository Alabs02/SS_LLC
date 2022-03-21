// STYLES
import "./NoEntity.scss";

import { Fragment } from "react";
import { INoEntity } from "../../../@types";

type Iprops = INoEntity;

const NoEntity = ({ imgUrl, heading, subheading }: Iprops) => {
  return (
    <Fragment>
      <section className="no-entity w-full grid place-items-center">
        <div className="no-entity__container w-full grid place-items-center">
          <div className="no-entity__media msb-16">
            <img src={imgUrl} alt="no-entity" />
          </div>

          <div className="no-entity__heading ft-15 lh-24 fw-semi-bold msb-3">{heading}</div>
          <div className="no-entity__subheading ft-13 lh-20 fw-normal">{ subheading }</div>
        </div>
      </section>
    </Fragment>
  );
}

export default NoEntity;