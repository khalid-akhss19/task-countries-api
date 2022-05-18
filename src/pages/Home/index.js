import React from "react";
// import Card from "../../components/Card";
import FetchApi from "../../components/FetchApi";
import HeroSection from "../../components/HeroSection";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Box pt={5}>
        <HeroSection />
      </Box>

      {/* <Card /> */}
      <Box pt={5}>
        <FetchApi />
      </Box>
    </>
  );
};

export default Home;
