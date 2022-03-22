import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ShipmentRoutes from "./ShipmentRoutes";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

const Router = () => {
  return (
    // <BrowserRouter basename="/ui/staff">
    <BrowserRouter>
      <Routes>
        {ShipmentRoutes()} {/* SHIPMENT ROUTES */}
        {AuthRoutes()}  {/* AUTH ROUTES */}
        {MainRoutes()} {/*  MAIN ROUTES */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;