import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPost = createAsyncThunk("post/getPost/pending", async () => {
  const { data } = await axios.get(
    "http://boax.alshumaal.com/admin/admin/api/nfts/readFeaturedArt.php"
  );
  return data.nfts;
});

const initialState = {
  post: [],
  postloading: false,
  postSucess: false,
  postFailed: false,
};

const post = createSlice({
  name: "post",
  initialState,

  extraReducers: {
    [getPost.pending]: (state) => {
      state.postloading = true;
      state.postSucess = false;
      state.postFailed = false;
    },
    [getPost.fulfilled]: (state, action) => {
      state.postSucess = true;
      state.postFailed = false;
      state.postloading = false;
      state.post = action.payload;
    },
    [getPost.rejected]: (state) => {
      state.postFailed = true;
      state.postSucess = false;
      state.postloading = false;
    },
  },
});

export default post.reducer;
