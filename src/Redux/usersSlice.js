import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = contactSlice;

export const { setUsers } = actions;
export default reducer;
