import React from "react";
import { useSelector } from "react-redux";
import { pagesSelector, currentPageSelector } from "../../Redux/selectors";
import { editCurrentPage } from "../../Redux/paginationSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const getPages = useSelector((state) => pagesSelector(state));
  const currentPage = useSelector((state) => currentPageSelector(state));
  const pageNumber = [];
  for (let i = 1; i <= getPages; i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={() => dispatch(editCurrentPage(currentPage - 1))}
      >
        Previos
      </button>
      <div
        onClick={(e) =>
          dispatch(editCurrentPage(Number(e.target.getAttribute("data"))))
        }
      >
        {pageNumber.map((number) => (
          <button
            disabled={currentPage === number ? true : false}
            key={uuidv4()}
            data={number}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === pageNumber.length ? true : false}
        onClick={() => dispatch(editCurrentPage(currentPage + 1))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
