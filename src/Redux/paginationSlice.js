import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
      perPage:20,
      pages:1,
      currentPage:1,
  },
  reducers: {
    editPage(state, action) {
      return {...state, currentPage:action.payload};
    },
    editPages(state, {payload}) {
        return {...state, pages:payload}
    },
    editCurrentPage(state, {payload}) {
      return {...state, currentPage:payload}
  }
  },
});

const {actions, reducer} = paginationSlice;

export const {editPagination, editPages, editCurrentPage} = actions;
export default reducer