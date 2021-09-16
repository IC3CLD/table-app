import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStates } from "../../Redux/selectors";
import { v4 as uuidv4 } from "uuid";
import { editSelect } from "../../Redux/selectSlice";
import { editCurrentPage } from "../../Redux/paginationSlice";


const Select = () => {
  const states = useSelector((state) => getStates(state));
  const dispatch = useDispatch()

  return (
    <div>
      <select name="state" id="state" onChange={e => (dispatch(editSelect(e.target.value), dispatch(editCurrentPage(1))))}>
        <option value="">Filter by state</option>
        {states.map(state => <option key={uuidv4()} value={state}>{state}</option>)}
      </select>
    </div>
  );
};

export default Select;
