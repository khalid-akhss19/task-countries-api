import React from "react";
import cn from "classnames";
import "./styles.css";

const Button = ({
  text,
  primary,
  secondary,
  MainauctionButn,
  blackBtnBid,
  whiteBtnAertwk,
  creators,
}) => {
  const layout = cn({
    primary: primary,
    secondary: secondary,
    MainauctionButn: MainauctionButn,
    blackBtnBid: blackBtnBid,
    whiteBtnAertwk: whiteBtnAertwk,
    creators: creators,
  });
  return (
    <>
      <button className={`${layout} bydefault `}>{text}</button>
    </>
  );
};
export default Button;
