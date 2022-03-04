import { Fragment } from "react";
import { ErrorMessage } from "formik";
import "animate.css";

const ErrorMsg = ({ name }: { name: string }) => {
  return (
    <Fragment>
      <ErrorMessage name={name}>
        {msg => <div className="animate__animated animate__shakeX app-text-tonic ft-13 fw-normal mst-4">{msg}</div>}
      </ErrorMessage>
    </Fragment>
  );
}

export default ErrorMsg;