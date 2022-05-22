import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { IconButton, Button } from "@material-ui/core";
import DrawersButton from "./DrawerComponent";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/Images/boax.png";
import Searchbar from "../../Units/Searchbar";
import SimpleButton from "../../Units/Button";

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const hanleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const match = useMediaQuery("(max-width: 960px)");
  // const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="outerContainer">
      <div className="leftdiv">
        <div className="leftimg">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      {match ? (
        <IconButton
          color="inherit"
          aria-label="opendrawer"
          onClick={hanleDrawerOpen}
          className={classes.iconbbtn}
        >
          <Menu />
        </IconButton>
      ) : (
        <div className="rightdiv">
          <div className="ssssss">
            <Searchbar />
          </div>
          <div className="rightlinks">
            <Link id="link" className="navlink" to="/">
              Home
            </Link>
            <Link id="link" className="navlink" to="Marketplace">
              Marketplace
            </Link>
            <Link id="link" className="navlink" to="Collections">
              Collections
            </Link>
            <Link id="link" className="navlink" to="Profile">
              Profile
            </Link>
            <Link id="link" className="navlink" to="Creators">
              Creators
            </Link>
            <Link id="link" className="navlink" to="Faq">
              Faq
            </Link>
          </div>

          <div className="butndiv">
            <Button className="header__buttonStyling ">Create NFT</Button>
          </div>
          <SimpleButton />
          {/* <div className="iconDiv">
            <AccountCircleIcon fontSize="large" className={classes.icon} />
          </div> */}
        </div>
      )}
      <DrawersButton open={open} handleDrawerClose={handleDrawerClose} />
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "47px",
    maargin: theme.spacing(1),
    cursor: "pointer",
  },
  iconbbtn: {
    color: "black",
    fontSize: "50px",
  },
}));
