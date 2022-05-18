import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./features/countrySlice/index";
import productReducer from "./features/productSlice/index";
const store = configureStore({
  reducer: {
    country: countryReducer,
    product: productReducer,
  },
});

export default store;
