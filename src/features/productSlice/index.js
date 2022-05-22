const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "CARDS",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setInput: (state, action) => {
      if (action.payload != null) {
        state.data = state.data.filter((item) => {
          if (item.name[0] === action.payload[0]) {
            return item;
          }
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus, setInput } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk("nft/fetch", async () => {
  const res = await fetch(
    "http://boax.alshumaal.com/admin/admin/api/Creators/readFeaturedCreators.php"
  );
  const data = await res.json();
  return data.Creators;
});

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }
