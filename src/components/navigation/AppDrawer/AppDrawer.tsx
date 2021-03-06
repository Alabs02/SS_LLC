// STYLES
import './AppDrawer.scss';

// @TYPES
import { DrawerRoute } from 'src/interfaces';

import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export type Iprops = {
  routes: DrawerRoute[];
};

const AppDrawer = ({ routes }: Iprops) => {
  const renderDrawerRoutes = () => {
    return (
      <Fragment>
        {routes.map((route, index) => {
          return (
            <div key={`${index}${route.to}`} className="msb-24">
              <NavLink
                to={route.to}
                className={({ isActive }) =>
                  isActive
                    ? 'app-drawer__item--active'
                    : 'app-drawer__item--inactive'
                }
              >
                <li className="app-drawer__item w-full psy-12 psx-24 d-flex place-items-center">
                  <route.icon className="msr-16" fontSize={20} />
                  <span className="fw-semi-bold ft-15 lh-24">
                    {route.title}
                  </span>
                </li>
              </NavLink>
            </div>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="app-drawer w-full h-full">
        <ul className="app-drawer__items w-full">{renderDrawerRoutes()}</ul>
      </div>
    </Fragment>
  );
};

export default AppDrawer;
