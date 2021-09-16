import { createSelector } from "reselect";

export const usersSelector = (state) => state.users;
export const filterSelector = (state) => state.filter;
export const selectSelector = (state) => state.select;
export const sortSelector = (state) => state.sort.sort;
export const sortReversSelector = (state) => state.sort.reverse;
export const userSelector = (state) => state.userId;
export const perPageSelector = (state) => state.pagination.perPage;
export const currentPageSelector = (state) => state.pagination.currentPage;
export const pagesSelector = (state) => state.pagination.pages;


export const getVisibleUsers = createSelector(
  [usersSelector, filterSelector, selectSelector, sortSelector, sortReversSelector],
  (users, filter, select, sort, reverse) => {
    let filterResult = [...users];
    if (filter) {
      filterResult = filterResult.filter((users) =>
        users.firstName.toLowerCase().includes(filter.toLowerCase())
      );
    }
    if (select) {
      filterResult = filterResult.filter((users) =>
        users.adress.state.toLowerCase().includes(select.toLowerCase())
      );
    }
    if (sort) {
      switch (sort) {
        case "id":
          filterResult = filterResult.sort((a, b) => a.id - b.id)
          break;
        case "firstName":
          filterResult = filterResult.sort((a, b) => a.firstName.localeCompare(b.firstName))
          break;
        case "lastName":
          filterResult = filterResult.sort((a, b) => a.lastName.localeCompare(b.lastName))
          break;
        case "email":
          filterResult = filterResult.sort((a, b) => a.email.localeCompare(b.email))
          break;
        case "phone":
          filterResult = filterResult.sort((a, b) => a.phone.localeCompare(b.phone))
          break;
        case "state":
          filterResult = filterResult.sort((a, b) => a.adress.state.localeCompare(b.adress.state))
          break;

        default:
          console.log('Invalid subscription type');
      }
      if(reverse){
        filterResult = filterResult.reverse();
      }
    }
    return filterResult;
  }
);

export const getStates = createSelector([usersSelector], (users) => {
  const states = [];
  (() => {
    users.map((user) => {
      return states.includes(user.adress.state)
        ? null
        : states.push(user.adress.state);
    });
  })();
  return states;
});

export const getUser = createSelector([usersSelector, userSelector], (users, userId) => {
  return users.find(user => user.id === Number(userId));
})