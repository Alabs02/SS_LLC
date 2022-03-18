import { Route } from "react-router-dom";

// LAYOUT
import { DashboardLayout } from "../../layouts";
import { FalseTest } from "../../pages/false";
// PAGES
import {
  Shipments,
  Details,
  Clients,
  RegisterClient,
  EditClient,
  RegisterRecipient,
  EditRecipient,
} from "../../pages/shipments";

// AUTH MIDDLEWARE
import { RequireAuth } from "../../middlewares";
import SuccessModal from "../../components/modals/SuccessModal/SuccessModal";
import SuccessModalTwo from "../../components/modals/SuccessModalTwo/SuccessModalTwo";
import CategoryModal from "../../components/modals/CategoryModal/CategoryModal";
import CreateShipment from "../../pages/false/forms/CreateShipment";
import AddItems from "../../pages/false/forms/AddItems";

const ShipmentRoutes = () => {
  return (
    <Route path="shipments" element={
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    }>
      <Route path="" element={<Shipments />}></Route>
      <Route path="details/:shipmentId" element={<Details />}></Route>
      <Route path="clients" element={<Clients />}></Route>
      <Route path="clients/register" element={<RegisterClient />}></Route>
      <Route path="clients/edit/:clientId" element={<EditClient />}></Route>
      <Route path="recipient/edit/:recipientId" element={<EditRecipient />}></Route>
      <Route path="recipient/register" element={<RegisterRecipient />}></Route>
      <Route path="false" element={<FalseTest/>}></Route>
      <Route path="smodal1" element={<SuccessModal/>}></Route>
      <Route path="smodal2" element={<SuccessModalTwo/>}></Route>
      <Route path="catmodal" element={<CategoryModal/>}></Route>
      <Route path="create-shipment" element={<CreateShipment/>}></Route>
      <Route path="add-item" element={<AddItems/>}></Route>

    </Route>
  );
};

export default ShipmentRoutes;