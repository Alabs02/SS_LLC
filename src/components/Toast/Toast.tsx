import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <Fragment>
      <ToastContainer
        position={'top-right'}
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss={true}
        pauseOnHover={true}
        draggable={true}
        theme={'light'}
      />
    </Fragment>
  );
};

export default Toast;
