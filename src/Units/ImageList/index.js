import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import image1 from "../../Assets/Images/Rectangle 19.png";
import image2 from "../../Assets/Images/Rectangle 20.png";
import image3 from "../../Assets/Images/Rectangle 21.png";
import image5 from "../../Assets/Images/Rectangle 23.png";
import image6 from "../../Assets/Images/Rectangle 24.png";
import image7 from "../../Assets/Images/Rectangle 25.png";
import image8 from "../../Assets/Images/Rectangle 26.png";
import image9 from "../../Assets/Images/Rectangle 27.png";
import image4 from "../../Assets/Images/Rectangle 22.png";

const ImageList = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.all}>
      <Grid item container direction="column" xs={12} sm={4}>
        <Grid item className={classes.Imagegrid}>
          <img
            src={image1}
            alt="one"
            style={{ height: "auto", width: "auto" }}
          />
        </Grid>
        <Grid item className={classes.Imagegrid}>
          <img
            src={image2}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
          />
        </Grid>
        <Grid item className={classes.Imagegrid}>
          <img
            src={image3}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={12}
        sm={4}
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.Imagegrid}>
          <img
            src={image4}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
            className={classes.Imagegrid}
          />
        </Grid>
        <Grid item className={classes.Imagegrid}>
          <img
            src={image5}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
          />
        </Grid>
        <Grid item className={classes.Imagegrid}>
          <img
            src={image6}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={12}
        sm={4}
        spacing={2}
        justify="center"
      >
        <Grid item className={classes.Imagegrid}>
          <img
            src={image7}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
          />
        </Grid>
        <Grid item className={classes.Imagegrid}>
          <img
            src={image8}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
          />
        </Grid>
        <Grid item className={classes.Imagegrid}>
          <img
            src={image9}
            alt="one"
            style={{ height: "auto", width: "auto" }}
            className={classes.Imagegrid}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageList;

const useStyles = makeStyles((theme) => ({
  Imagegrid: {
    [theme.breakpoints.up("md")]: {
      justify: "space-between",

      backgroundSize: "cover",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  },
  all: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
