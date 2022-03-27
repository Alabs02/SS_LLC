import { Fragment } from 'react';
import { Route } from 'react-router-dom';

// MIDDLEWARE
import { RequireAuth } from 'src/middlewares';

//LAYOUTS#
import { DashboardLayout } from 'src/layouts';

// PAGES
import { Home } from 'src/pages/main';
import { FalseTest } from 'src/pages/false';
import { CreateShipment } from 'src/pages/shipments';
import { AirwayTrackShipment } from 'src/pages/airway-bill';

const MainRoutes = () => {
  return (
    <Fragment>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create-shipment" element={<CreateShipment />}></Route>
      <Route path="/false" element={<FalseTest />}></Route>
      <Route path="/airway-bill/track-shipment/:shipmentId" element={
        <RequireAuth>
          <DashboardLayout />
        </RequireAuth>
      }>
        <Route path="" element={<AirwayTrackShipment />}></Route>
      </Route>
    </Fragment>
  );
};

export default MainRoutes;
