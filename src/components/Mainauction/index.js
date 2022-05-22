import Button from "../../components/button";
import Image2 from "../../assets/Rectanglez.png";
import Image3 from "../../assets/Images/Ellipse2.png";
import "./style.css";

import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../features/postSlicer/postSlicer";

const Mainauction = () => {
  const {
    postSlice: { post, postloading, postSucess, postFailed },
  } = useSelector((state) => state);
  console.log(post, postFailed, postSucess, postloading, "post");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <>
      {postloading && "Loading ..."}
      {postSucess &&
        post.map((post) => {
          return (
            <Grid container>
              <Grid xs={12} md={6} container justifyContent="center">
                <img
                  src={Image2}
                  // src={post.creator_img}
                  alt=""
                  style={{ width: "65%", height: "85%" }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Grid container>
                  <div className="mainuauctionTop">
                    <img className="imageRound" src={post.creator_img} alt="" />
                    <h3 className="text-mainauction">@{post.creator_name}</h3>
                  </div>
                </Grid>
                <Grid container>
                  <div className="Blob">
                    {/* <h1>Life 2011 (V)</h1> */}
                    <h1>{post.art_name}</h1>
                  </div>

                  <Grid item xs={12} className="timing-auction">
                    <Grid container item xs={5} spacing={2}>
                      <div>
                        <p className="bid">Current Bid</p>
                        <p className="lbrt">1.18ETH</p>
                        <p className="dollar">26,000$</p>
                      </div>
                      <Grid>
                        <div
                          className="horline"
                          container
                          item
                          xs={2}
                          spacing={1}
                        ></div>
                      </Grid>
                    </Grid>

                    <Grid className="timming" container item xs={5} spacing={2}>
                      <div>
                        <p className="bid">Auction ending in</p>
                        <p className="min">11 40 30</p>
                        <b className="dollar">Hours Min Seconds</b>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className="blueButton"
                    spacing={1}
                  >
                    <Grid container item xs={6} style={{ marginTop: "20px" }}>
                      <Button text="Place a bid" blackBtnBid />
                    </Grid>
                    <Grid item container xs={6} style={{ marginTop: "20px" }}>
                      <Button text="View ArtWork" whiteBtnAertwk />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      {postFailed && <h1>Failed</h1>}
    </>
  );
};
export default Mainauction;
