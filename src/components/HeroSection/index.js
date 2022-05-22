import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../features/countrySlice";
import { fetchNft } from "../../features/nftSingle";
import { STATUSES } from "../../features/productSlice";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// import ImageList from "../../Units/ImageList";

const HeroSection = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { data: nfts, status } = useSelector((state) => state.nft);

  useEffect(() => {
    dispatch(fetchNft());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2 className="loadingCenter">Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2 className="loadingCenter ">Something went wrong!</h2>;
  }

  return (
    <>
      <div className="productsWrapper">
        {products.map((nft) => (
          <>
            <Grid container justifyContent="space-around">
              <Grid
                item
                xs={12}
                md={6}
                className={classes.sectionOne}
                direction="column"
              >
                <Typography variant="h3" className={classes.heroheading}>
                  Discover digital art and <br /> collect NFTs
                </Typography>
                <Typography variant="body1" className={classes.heropara}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                  convallis
                  <br /> nisl, aenean eget ac tincidunt. Erat elit id lectus
                  platea integer.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={classes.sectionTwo}>
                {/* <ImageList /> */}
                <h3> images herer</h3>
              </Grid>
            </Grid>
          </>
        ))}
      </div>
    </>
  );
};

export default HeroSection;

const useStyles = makeStyles((theme) => ({
  sectionOne: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e2f5ff",
  },
  sectionTwo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heroheading: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontSize: "48px",

    fontWeight: "700",
    lineHeight: "59px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      fontWeight: "500",
      lineHeight: "30px",
    },
  },
  heropara: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "22px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      fontWeight: 300,
      lineHeight: "15px",
      padding: "10px",
    },
  },
}));
