import { Route } from 'react-router-dom';

// LAYOUT
import { DashboardLayout } from 'src/layouts';
// PAGES
import {
  EditRecipient,
  RegisterRecipient
} from 'src/pages/recipients';

// AUTH MIDDLEWARE
import { RequireAuth } from 'src/middlewares';

const RecipientRoutes = () => {
  return (
    <Route
      path="recipients"
      element={
        <RequireAuth>
          <DashboardLayout />
        </RequireAuth>
      }
    >
      <Route path="register" element={<RegisterRecipient />}></Route>
      <Route path="edit/:recipientId" element={<EditRecipient />}></Route>
    </Route>
  );
};

export { RecipientRoutes as default };
