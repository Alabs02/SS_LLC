import { Route } from 'react-router-dom';

// LAYOUT
import { AuthLayout } from 'src/layouts';

// PAGES
import { Signin, ForgotPassword } from 'src/pages/auth';

const AuthRoutes = () => {
  return (
    <Route element={<AuthLayout />}>
      <Route path="signin" element={<Signin />}></Route>
      <Route path="forgot-password" element={<ForgotPassword />}></Route>
    </Route>
  );
};

export default AuthRoutes;
