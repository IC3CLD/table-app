import { createSlice } from "@reduxjs/toolkit";

const singleUserSlice = createSlice({
  name: "userId",
  initialState: "",
  reducers: {
    editUser(state, action) {
      return action.payload;
    },
  },
});

const {actions, reducer} = singleUserSlice;

export const {editUser} = actions;
export default reducer