import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const SimpleButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.buuuton}>
        Wallet
      </Button>
    </div>
  );
};
export default SimpleButton;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
      borderRadius: "90px",
      width: "140.87px",
      backgroundColor: "rgba(153, 221, 255, 1)",
    },
  },
  buuuton: {
    color: "rgba(23, 60, 86, 1)",
    backgroundColor: "rgba(153, 221, 255, 1) !important",
  },
}));
