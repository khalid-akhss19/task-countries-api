import { configureStore } from "@reduxjs/toolkit";
// import countryReducer from "./features/countrySlice/index";
import productReducer from "./features/productSlice/index";
import post from "./features/postSlicer/postSlicer";
const store = configureStore({
  reducer: {
    // country: countryReducer,
    product: productReducer,
    postSlice: post,
  },
});

export default store;
