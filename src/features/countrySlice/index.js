const { createSlice } = require("@reduxjs/toolkit");

const countrySlice = createSlice({
  name: "country",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.name !== action.payload);
    },
  },
});

export const { add, remove } = countrySlice.actions;
export default countrySlice.reducer;
