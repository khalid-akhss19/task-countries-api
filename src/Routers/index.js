import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";

// import Footer from "../components/Footer";
// import Countries from "../Pages/Countries";

const Routers = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Countries" element={<Countries />} /> */}
          {/* <Route path="/favourite" element={<Favourite />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Routers;
