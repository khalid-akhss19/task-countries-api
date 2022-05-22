import React from "react";
import FetchApi from "../../components/FetchApi";

import Mainauction from "../../components/Mainauction";
import { Box } from "@material-ui/core";
import WrappperMargin from "../../components/WrappperMargin";

const Home = () => {
  return (
    <>
      <Box pt={5}>
        <WrappperMargin>
          <Mainauction />
        </WrappperMargin>
      </Box>

      <Box pt={5}>
        <FetchApi />
      </Box>
    </>
  );
};

export default Home;
