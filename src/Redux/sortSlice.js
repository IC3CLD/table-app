import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: "",
  reducers: {
    editSort(state, action) {
      return action.payload;
    },
  },
});

const {actions, reducer} = sortSlice;

export const {editSort} = actions;
export default reducer