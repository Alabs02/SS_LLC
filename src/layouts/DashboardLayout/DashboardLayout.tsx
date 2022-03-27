import { Fragment, FC } from 'react';
import { Outlet } from 'react-router-dom';

// @TYPES
import { DrawerRoute } from 'src/interfaces';

// COMPONENTS
import { AppBar, AppFooter, AppDrawer } from 'src/components/navigation';
import { FaBox, FaUserCog, FaFileInvoice, FaFileAlt } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';

const DashboardLayout: FC = () => {
  const drawerRoutes: DrawerRoute[] = [
    {
      to: '/airway-bill/track-shipment/1',
      title: 'Airway Bill',
      icon: FaFileAlt,
    },
    {
      to: '/shipments',
      title: 'Shipments',
      icon: FaBox,
    },

    {
      to: '/accounting',
      title: 'Accounting',
      icon: FaFileInvoice,
    },

    {
      to: '/administration',
      title: 'Administration',
      icon: FaUserCog,
    },

    {
      to: '/settings',
      title: 'Settings',
      icon: IoSettingsSharp,
    },
  ];

  return (
    <Fragment>
      <div className="grid w-full h-full">
        <AppBar />
        <div className="dashboard-layout w-full h-full">
          <div className="dashboard-layout__drawer h-full">
            <AppDrawer routes={drawerRoutes} />
          </div>

          <div className="dashboard-layout__content position-relative w-full h-full">
            <Outlet />
          </div>
        </div>
        <AppFooter />
      </div>
    </Fragment>
  );
};

export default DashboardLayout;
