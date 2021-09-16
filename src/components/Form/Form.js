import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterSelector, currentPageSelector } from "../../Redux/selectors";
import { editFilter } from "../../Redux/filterSlice";
import { editCurrentPage } from "../../Redux/paginationSlice";

const Form = () => {
  const filterValue = useSelector((state) => filterSelector(state));
  const currentPage = useSelector((state) => currentPageSelector(state));
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const filterInputValue = e.target.value;
    dispatch(editFilter(filterInputValue));
    if (currentPage!==1) {
      dispatch(editCurrentPage(1));
    }
  };
  return (
    <form>
      <input type="text" value={filterValue} onChange={inputHandler} />
    </form>
  );
};

export default Form;
