import { Route } from 'react-router-dom';

// LAYOUT
import { DashboardLayout } from 'src/layouts';
import { FalseTest } from 'src/pages/false';
// PAGES
import {
  Shipments,
  Details,
  Clients,
  RegisterClient,
  EditClient,
  TrackShipment,
  Invoice,
} from 'src/pages/shipments';

// AUTH MIDDLEWARE
import { RequireAuth } from 'src/middlewares';
import AddItems from 'src/pages/false/forms/AddItems';

const ShipmentRoutes = () => {
  return (
    <Route
      path="shipments"
      element={
        <RequireAuth>
          <DashboardLayout />
        </RequireAuth>
      }
    >
      <Route path="" element={<Shipments />}></Route>
      <Route path="details/:shipmentId">
        <Route path="" element={<Details />}></Route>
        <Route path="track-shipment" element={<TrackShipment />}></Route>
        <Route path="invoice" element={<Invoice />}></Route>
      </Route>
      <Route path="clients" element={<Clients />}></Route>
      <Route path="clients/register" element={<RegisterClient />}></Route>
      <Route path="clients/edit/:clientId" element={<EditClient />}></Route>
      <Route path="false" element={<FalseTest />}></Route>
      <Route path="add-item" element={<AddItems />}></Route>
    </Route>
  );
};

export default ShipmentRoutes;
