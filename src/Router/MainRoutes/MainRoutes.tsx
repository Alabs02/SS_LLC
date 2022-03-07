import { Fragment } from "react";
import { Route } from "react-router-dom";

//LAYOUTS

// PAGES
import { Home } from "../../pages/main";
import { FalseTest } from "../../pages/false";


const MainRoutes = () => {
  return (
    <Fragment>
      <Route path="/" element={<Home />}></Route>
      <Route path="/false" element={<FalseTest />}></Route>
    </Fragment>
  );
}

export default MainRoutes;