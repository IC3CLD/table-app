import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {
  getVisibleUsers,
  perPageSelector,
  currentPageSelector,
  sortSelector,
  sortReversSelector,
} from "../../Redux/selectors";
import { editSort } from "../../Redux/sortSlice";
import { editUser } from "../../Redux/singleUserSlice";
import { editPages } from "../../Redux/paginationSlice";

const Table = () => {
  const dispatch = useDispatch();

  let filtered = useSelector((state) => getVisibleUsers(state));
  const perPage = useSelector((state) => perPageSelector(state));
  const currentPage = useSelector((state) => currentPageSelector(state));
  let sortBy = useSelector((state) => sortSelector(state));
  let sortRevers = useSelector((state) => sortReversSelector(state));

  useEffect(() => {
    dispatch(editPages(Math.ceil(filtered.length / perPage)));
  }, [dispatch, filtered.length, perPage]);

  return (
    <table>
      <thead onClick={(e) => dispatch(editSort(e.target.getAttribute("data")))}>
        <tr>
          <th
            data="id"
            className={
              sortBy === "id" && sortRevers === false
                ? "column-heading-down"
                : "column-heading-up"
            }
          >
            id
          </th>
          <th
            data="firstName"
            className={
              sortBy === "firstName" && sortRevers === false
                ? "column-heading-down"
                : "column-heading-up"
            }
          >
            First name
          </th>
          <th
            data="lastName"
            className={
              sortBy === "lastName" && sortRevers === false
                ? "column-heading-down"
                : "column-heading-up"
            }
          >
            Last name
          </th>
          <th
            data="email"
            className={
              sortBy === "email" && sortRevers === false
                ? "column-heading-down"
                : "column-heading-up"
            }
          >
            Email
          </th>
          <th
            data="phone"
            className={
              sortBy === "phone" && sortRevers === false
                ? "column-heading-down"
                : "column-heading-up"
            }
          >
            Phone
          </th>
          <th
            data="state"
            className={
              sortBy === "state" && sortRevers === false
                ? "column-heading-down"
                : "column-heading-up"
            }
          >
            State
          </th>
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
