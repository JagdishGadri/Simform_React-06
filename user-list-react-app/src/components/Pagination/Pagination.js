import React, { useState } from 'react'
import "./Pagination.css"

function Pagination(props) {

  return (
    <div>
        <ul className="pagination">
            <li className="page-number">
                <a href="!#"  onClick={()=>{props.changePage(1)}}>1</a>
            </li>
            <li className= "page-number">
                <a href="!#" onClick={()=>{props.changePage(2)}}>2</a>
            </li>
        </ul>
    </div>
  )
}

export default Pagination