import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {
  getVisibleUsers,
  perPageSelector,
  currentPageSelector,
} from "../../Redux/selectors";
import { editSort } from "../../Redux/sortSlice";
import { editUser } from "../../Redux/singleUserSlice";
import { editPages } from "../../Redux/paginationSlice";

const Table = () => {
  const dispatch = useDispatch();
  let filtered = useSelector((state) => getVisibleUsers(state));
  const perPage = useSelector((state) => perPageSelector(state));
  const currentPage = useSelector((state) => currentPageSelector(state));

  useEffect(() => {
    dispatch(editPages(Math.ceil(filtered.length / perPage)));
  }, [dispatch, filtered.length, perPage]);

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
      <tbody
        onClick={(e) =>
          dispatch(editUser(e.target.parentElement.getAttribute("data")))
        }
      >
        {filtered
          .slice(0 + 20 * (currentPage - 1), 20 * currentPage)
          .map(({ id, firstName, lastName, phone, email, adress }) => {
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
