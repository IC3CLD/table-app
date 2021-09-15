import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {filterSelector} from '../../Redux/selectors';
import { editFilter } from "../../Redux/filterSlice";

const Form = () => {
    const filterValue = useSelector((state) => filterSelector(state));
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        const filterInputValue = e.target.value;
        dispatch(editFilter(filterInputValue));
      };
    return (
        <form>
            <input type="text" value={filterValue} onChange={inputHandler}/>
        </form>
    );
};

export default Form;