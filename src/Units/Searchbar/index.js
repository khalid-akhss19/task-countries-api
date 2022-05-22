import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const Searchbar = () => {
  const classes = useStyles();
  return (
    <>
      <>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search here…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search here" }}
          />
        </div>
      </>
    </>
  );
};

export default Searchbar;

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    backgroundColor: "rgba(23, 60, 86, 1)",
    color: "white",
    borderRadius: "25px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
