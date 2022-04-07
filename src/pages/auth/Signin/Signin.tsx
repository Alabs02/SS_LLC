// STYLES
import './Signin.scss';

// THIRD PARTY PACKAGES
import { Fragment, useState } from 'react';
import { object as yupObject, string } from 'yup';
import { Formik, Form, Field } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'

// COMPONENTS
import FormField from 'src/components/forms';
import { ErrorMsg } from 'src/components/errors';
import { LoadingBtn } from 'src/components/core';

// UTILITIES
import { isSuccessful } from 'src/utils/helpers';
import { $api, $storage } from 'src/services';

// INTERFACES
import { IUserPayload } from 'src/interfaces';

export type UserPayload = {
  key: string;
  payload: any;
};

const initialFormState = () => {
  return {
    email: '',
    password: '',
  };
};

const formSchema = yupObject().shape({
  email: string().email('Invalid Email Address').required('Email is Required'),
  password: string().required('Password is required'),
});

const Signin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const signin = async (values: object) => {
    setIsLoading(true);

    const response = await $api
      .service('auth', 'staff')
      .push('/auth/login', values, false);

    const cookieConfig = {
      path: '/',
      expires: 7,
      secure: true,
      domain: 'localhost',
    };

    console.log({ response });

    if (isSuccessful(response?.status)) {
      let payload: IUserPayload = {
        ...response?.data,
        isLoggedIn: true,
      };

      Cookies.set('set-cookie', 'value', cookieConfig);

      let status = $storage.pushToStore('userPayload', payload);
      status &&
        navigate('/shipments', { replace: true, state: { isLoggedIn: true } });
      status && toast.success('You have successfully signed in');
    } else {
      toast.error('Authentication Failed', {
        position: 'top-center',
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Fragment>
      <div className="signin">
        <div className="signin__media msb-25">
          <img src="/static/logo.svg" alt="brand-logo" />
        </div>

        <div className="auth-layout__heading">Welcome Back</div>
        <div className="auth-layout__subheading fw-medium mst-10 msb-32">
          Log into your account in order to continue enjoying amazing <br />
          rates on every shipment you make!
        </div>

        <Formik
          initialValues={initialFormState()}
          validationSchema={formSchema}
          onSubmit={(values) => {
            return signin(values);
          }}
        >
          {(props) => (
            <Form className="w-100 grid place-items-center">
              <div className="form-group w-100 msb-16">
                <Field
                  name="email"
                  type="email"
                  as={FormField.TextField}
                  placeholder="Email Address"
                  required
                />
                <ErrorMsg name={'email'} />
              </div>

              <div className="form-group w-100 msb-24">
                <Field
                  name="password"
                  as={FormField.PasswordField}
                  placeholder="Password"
                  required
                />
                <ErrorMsg name={'password'} />
              </div>

              <LoadingBtn
                btnCopy={'Log In'}
                btnType={'submit'}
                isLoading={isLoading}
                loadingCopy={'Loading...'}
                loaderColor={'#c5292a'}
                btnClasses={'btn-tonic-light auth-layout__btn msb-16'}
                onClick={() => {}}
              />

              <NavLink to="/forgot-password" className="msb-30">
                <span className="auth-layout__link">Forgot Password?</span>
              </NavLink>

              <div className="auth-layout__text">
                New User?
                <NavLink to="/signup">
                  <span className="auth-layout__link msl-2">
                    Create an account
                  </span>
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default Signin;
