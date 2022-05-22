import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../features/countrySlice";
import { fetchProducts } from "../../features/productSlice";
import { STATUSES } from "../../features/productSlice";
import "./style.css";

import { Box, makeStyles, Typography } from "@material-ui/core";

import one from "../../assets/oneone.png";

const FetchApi = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
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
      <div className="FeaturedCreators">
        <h2>Featured Creators</h2>
      </div>
      <div className="productsWrapper">
        {products.map((product) => (
          <>
            <div className="a">
              <div className="b">
                <img src={product.creator_img} alt="" className="photo2" />
              </div>

              <Box className={classes.details}>
                <Typography variant="h4" className={classes.colorchnge}>
                  {product.username}
                </Typography>
                <Typography variant="h5" className={classes.colorchnge}>
                  @{product.fullName}
                </Typography>
                <Typography varient="h6" className={classes.colorchnge}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra, neque mi congue eleifend aenean in.
                </Typography>
              </Box>
              <div className="c">
                <img className="necircleimg" src={one} alt="" />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FetchApi;

const useStyles = makeStyles((theme) => ({
  card: {
    width: "305.24px",
    borderRadius: "10px",

    margin: "20px",
    position: "relative",
  },
  details: {
    backgroundColor: "#B5B5B5",
    clipPath:
      "polygon(20% 14%, 100% 0, 100% 100%, 0 100%, 0 83%, 0 34%, 0 29%, 4% 24%, 8% 20%, 14% 16%)",
    padding: "100px 20px 0 20px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: " 10px",
    position: "absolute",
    bottom: "5px",
  },
  imgO: {
    position: "absolute",
    zIndex: "2",
  },
  colorchnge: {
    color: "#FFFFFF",
  },
}));
