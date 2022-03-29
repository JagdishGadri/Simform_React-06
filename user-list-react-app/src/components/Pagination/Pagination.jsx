import React, { useState } from "react";
import "./Pagination.css";

function Pagination(props) {
 
    let currentPage=1;
    

  return (
    <div>
      <ul className="pagination">
        <li className="page-number">
          <a
            href="!#"
            onClick={() => {
              props.changePage(currentPage);
            }}
          >
            {" "}
            &lt;&lt; Prev{" "}
          </a>
        </li>
        <li className="page-number">
          <a
            href="!#"
            onClick={() => {
              props.changePage(currentPage);
            }}
          >
            1
          </a>
        </li>
        <li className="page-number">
          <a
            href="!#"
            onClick={() => {
                currentPage +=1;
                props.changePage(currentPage);
            }}
          >
            2
          </a>
        </li>
        <li className="page-number">
          <a
            href="!#"
            onClick={() => {
              currentPage +=1;
              props.changePage(currentPage);
            }}
          >
            Next &gt;&gt;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
