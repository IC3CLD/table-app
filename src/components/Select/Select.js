import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStates } from "../../Redux/selectors";
import { v4 as uuidv4 } from "uuid";
import { editSelect } from "../../Redux/selectSlice";

const Select = () => {
  const states = useSelector((state) => getStates(state));
  const dispatch = useDispatch()

  return (
    <div>
      <select name="state" id="state" onChange={e => dispatch(editSelect(e.target.value))}>
        <option value="">Filter by state</option>
        {states.map(state => <option key={uuidv4()} value={state}>{state}</option>)}
      </select>
    </div>
  );
};

export default Select;
