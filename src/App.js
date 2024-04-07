import { Routes, Route } from "react-router-dom";

import LayoutRestaurantRpl from "./components/layout/layout.component";
import HomePage from "./components/home/home.component";

import "./styles/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutRestaurantRpl />}>
          <Route index element={<HomePage />}></Route>
          {/* <Route path="/booking" element={<BookingPage />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
