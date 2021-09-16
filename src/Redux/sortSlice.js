import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sort: "",
    reverse: false,
  },
  reducers: {
    editSort(state, { payload }) {
      return state.sort === payload
        ? { ...state, reverse: !state.reverse }
        : { sort: payload, reverse:false };
    },
  },
});

const { actions, reducer } = sortSlice;

export const { editSort } = actions;
export default reducer;
