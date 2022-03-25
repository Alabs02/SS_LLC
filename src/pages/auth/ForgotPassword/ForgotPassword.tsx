// STYLES
import "./ForgotPassword.scss";

import { Fragment, useState } from "react";
import { object as yupObject, string } from "yup";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

// COMPONENTS
import FormField from "src/components/forms";
import { ErrorMsg } from "src/components/errors";
import { LoadingBtn } from "src/components/core";

// HELPERS
import { $api } from "src/services";
import { isSuccessful } from "src/utils/helpers";

const initialFormState = () => {
  return {
    email: "",
    phone_number_with_country_code: "string"
  }
}

const formSchema = yupObject().shape({
  email: string()
    .email("Invalid Email Address")
    .required("Email is required"),
})

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = async (values: object) => {
    setIsLoading(true);

    const response = await $api
      .service("staff")
      .push("/auth/request_reset_password", values, false);

    if (isSuccessful(response?.status)) {
      toast.success("An email has been sent to your email address");

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      toast.error("An error occured while trying to reset your password, please try again", {
        autoClose: 6000,
        position: "top-center"
      });

      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    }

    console.log({ response });
  }

  return (
    <Fragment>
      <div className="forgot">
        <div className="auth-layout__heading">Forgot Password</div>
        <div className="auth-layout__subheading fw-medium mst-10 msb-28">
          Kindly enter your email address, and a link to reset<br /> your password will be sent to you.
        </div>

        <Formik
          initialValues={initialFormState()}
          validationSchema={formSchema}
          onSubmit={(values) => {
            resetPassword(values)
          }}
        >
          {props => (
            <Form className="w-100 grid place-items-center">
              <div className="form-group w-100 msb-24">
                <Field name="email" type="email" as={FormField.TextField} placeholder="Email Address" required />
                <ErrorMsg name={'email'} />
              </div>

              <LoadingBtn
                btnCopy={"Send Reset Link"}
                btnType={"submit"}
                isLoading={isLoading}
                loadingCopy={"Loading..."}
                loaderColor={"#c5292a"}
                btnClasses={"btn-tonic-light auth-layout__btn msb-16"}
                onClick={() => {}}
              />

              <NavLink to="/signin">
                <span className="auth-layout__link">I remember now</span>
              </NavLink>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;