import { Fragment, FC } from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import {
  AppToolBar,
  AppFooter,
} from "src/components/navigation";

const AuthLayout: FC = () => {
  return (
    <Fragment>
      <div className="grid w-full h-full">
        <AppToolBar />
        <div className="auth-layout h-full w-full">
          <div className="auth-layout__container">
            <div className="auth-layout__content h-full">
              <Outlet />
            </div>

            <div className="auth-layout__ornament"></div>
          </div>
        </div>

        <div className="auth-layout__sticky-footer w-full">
          <AppFooter />
        </div>
      </div>
    </Fragment>
  )
}

export default AuthLayout