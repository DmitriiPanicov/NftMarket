import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 3,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory: (state, actions) => {
      state.activeCategory = actions.payload;
    },
  },
});

export const { setActiveCategory } = filterSlice.actions;

export default filterSlice.reducer;
