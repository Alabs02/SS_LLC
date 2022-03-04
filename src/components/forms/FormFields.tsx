// STYLES
import "./FormFields.scss";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Fragment, useState } from 'react';
import "animate.css";

export const TextField = (props: any) => {
  return (
    <Fragment>
      <input className="app-form-control" {...props} />
    </Fragment>
  );
}

export const PasswordField = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <div className="field-container">
        <input type={isVisible ? "text" : "password"} className="app-form-control"  {...props} />
        { isVisible
          ? <AiOutlineEye onClick={() => setIsVisible(!isVisible)} size={18} className="field-container__append app-text-dark pointer animate__animated animate__pulse" />
          : <AiOutlineEyeInvisible onClick={() => setIsVisible(!isVisible)} size={18} className="field-container__append app-text-dark pointer animate__animated animate__pulse" />
        }
      </div>
    </Fragment>
  );
}