import { BrowserRouter, Routes } from 'react-router-dom';

// ROUTES
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import ShipmentRoutes from './ShipmentRoutes';
import RecipientRoutes from './RecipientRoutes';

const Router = () => {
  return (
    <BrowserRouter basename="/ui/staff">
      <Routes>
        {ShipmentRoutes()} {/* SHIPMENT ROUTES */}
        {AuthRoutes()} {/* AUTH ROUTES */}
        {MainRoutes()} {/*  MAIN ROUTES */}
        {RecipientRoutes()} {/* RECIPIENT ROUTES */}
      </Routes>
    </BrowserRouter>
  );
};

export { Router as default };
