import React from "react";
import "./UserItem.css";
import { Trash2, Lock } from "react-feather";
import { useDispatch } from "react-redux";
import {onMouseHover} from "../../../redux/actions/actions"

function UserItem(props) {
  const dispatch=useDispatch()

  return (
    <div className="user-item"   >
      <div className="user-data" onMouseEnter={() => dispatch(onMouseHover(props.userId))}>
        <img
          className="user-img"
          src={props.userPicture}
          alt="Profile Picture"
         
        />
        <div className="user-name-email">
          <div className="user-name">
            <h5>{props.userFirstName + " " + props.userLastName}</h5>
          </div>
          <div className="user-email">
            <h6>{props.userEmail}</h6>
          </div>
        </div>
      </div>
      {props.userId == 1 ? (
        <p style={{color:"green"}}> Active </p>
      ) : (
        <select className="status-dropdown">
          <option value="Inactive">Inactive</option>
          <option value="Active">Active</option>
        </select>
      )}
      {props.userId == 1 ? (
        <p> Owner </p>
      ) : (
        <select className="access-dropdown">
          <option value="Manager">Manager</option>
          <option value="Read">Read</option>
        </select>
      )}

      {props.userId == 1 ? (
        <Lock />
      ) : (
        <div className="delete-button">
          <Trash2 />
        </div>
      )}
    </div>
  );
}

export default UserItem;
