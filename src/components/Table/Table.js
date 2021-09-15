import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleUsers } from "../../Redux/selectors";
import { editSort } from "../../Redux/sortSlice";
import { editUser } from "../../Redux/singleUserSlice";


const Table = () => {
  let filtered = useSelector((state) => getVisibleUsers(state));
  const dispatch = useDispatch();

  return (
    <table>
      <thead onClick={(e) => dispatch(editSort(e.target.getAttribute("data")))}>
        <tr>
          <th data="id">id</th>
          <th data="firstName">First name</th>
          <th data="lastName">Last name</th>
          <th data="email">Email</th>
          <th data="phone">Phone</th>
          <th data="state">State</th>
        </tr>
      </thead>
      <tbody onClick={(e) => dispatch(editUser(e.target.parentElement.getAttribute("data")))}>
        {filtered.map(({ id, firstName, lastName, phone, email, adress }) => {
          return (
            <tr key={uuidv4()} data={id}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{adress.state}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
