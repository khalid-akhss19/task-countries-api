import React from "react";

import NewComponent from "../../Components/NewComponent";
import { Box, makeStyles } from "@material-ui/core";

const Data = [
  { nam: "All" },
  { nam: "Games" },
  { nam: "Art" },
  { nam: "Trading Cards" },
  { nam: "Music" },
  { nam: "Memes" },
  { nam: "Collectables" },
];

const Links = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-evenly"
        className={classes.Links}
        pt={2}
      >
        {Data.map(({ nam }) => {
          return (
            <NewComponent variant="outlinedSecondary">{nam} </NewComponent>
          );
        })}
        {/* <NewComponent variant="outlinedSecondary">All </NewComponent>
        <NewComponent variant="outlinedSecondary">Games </NewComponent>
        <NewComponent variant="outlinedSecondary">Art </NewComponent>
        <NewComponent variant="outlinedSecondary">Trading Cards </NewComponent>
        <NewComponent variant="outlinedSecondary">Music </NewComponent>
        <NewComponent variant="outlinedSecondary">Memes </NewComponent>
        <NewComponent variant="outlinedSecondary">Collectables </NewComponent> */}
      </Box>
    </>
  );
};

export default Links;

const useStyles = makeStyles((theme) => ({
  Links: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
