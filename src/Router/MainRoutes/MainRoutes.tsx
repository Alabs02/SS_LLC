import { Route } from "react-router-dom";

//LAYOUTS

// PAGES
import { Home } from "../../pages/main";


const MainRoutes = () => {
  return (
    <Route
      path="/"
      element={
        <Home />
    }></Route>
  );
}

export default MainRoutes;