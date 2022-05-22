import React from "react";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ListItem, ListItemText } from "@material-ui/core";
import "./style.css";
const DrawersButton = ({ open, handleDrawerClose, setOpen }) => {
  return (
    <>
      <Drawer
        open={open}
        anchor="right"
        backgroundColor="black"
        className="drawer"
      >
        <ListItem button onClick={handleDrawerClose}>
          <ArrowForwardIosIcon />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Marketplace"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Collections"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Profile"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Creators"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Faq"} />
        </ListItem>
        <ListItem button>
          <Button id="CtW" variant="contained" color="primary">
            Connect Wallet
          </Button>
        </ListItem>
      </Drawer>
    </>
  );
};
export default DrawersButton;
