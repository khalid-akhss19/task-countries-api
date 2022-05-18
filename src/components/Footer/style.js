import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footercontainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    alignContent: "center",
    justifyItems: "center",
    backgroundColor: "#FFFFFF",
    color: "rgba(23, 60, 86, 1)",
    minHeight: "300px",
    width: "100%",

    "& li": {
      listStyle: "none",
      padding: "10px",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr ",
      textAlign: "start",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      textAlign: "start",
    },
  },
  inchortags: {
    color: "rgba(23, 60, 86, 1)",
  },
  footerPara: {
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  list: {
    color: "rgba(23, 60, 86, 1)",
  },
  footerhr: {
    paddingBottom: "40px",
    color: "rgba(23, 60, 86, 1)",
  },
  linkks: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
      padding: "20px",
    },
  },
  loggo: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));
