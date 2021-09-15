import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
  name: "select",
  initialState: "",
  reducers: {
    editSelect(state, action) {
      return action.payload;
    },
  },
});

const {actions, reducer} = selectSlice;

export const {editSelect} = actions;
export default reducer