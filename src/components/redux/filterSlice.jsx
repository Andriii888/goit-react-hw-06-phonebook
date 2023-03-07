import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";

const filtersInitialState = {
  finde:''
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    findeName(state, action) {
      state.finde=action.payload;
    },
  },
});

export const { findeName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
