import { Outlet } from "react-router-dom";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";

const LayoutRestaurantRpl = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutRestaurantRpl;
