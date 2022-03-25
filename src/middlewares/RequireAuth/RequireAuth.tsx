import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { $storage } from "src/services";

// INTERFACES
import { IUserPayload } from "src/interfaces";

const RequireAuth = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  const userPayload: IUserPayload = $storage.getFromStore("userPayload");

  return userPayload?.isLoggedIn
    ? (children)
    : (<Navigate to="/signin" replace={true} state={{ path:  location.pathname }} />);
}

export default RequireAuth;