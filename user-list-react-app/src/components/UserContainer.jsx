import React, { useEffect } from "react";
import HoverCard from "./HoverCard/HoverCard";
import styled from "./UserContainer.css";
import UserList from "./User/UserList/UserList";
import { useDispatch } from "react-redux";
import {fetchUsersData} from "../redux/actions/actions"

function UserContainer() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsersData())
  })
  

  return (
    <div className="user-container">
      <UserList/>
      <HoverCard/>
    </div>
  );
}

export default UserContainer;
