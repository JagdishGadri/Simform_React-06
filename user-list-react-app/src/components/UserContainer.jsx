import React from "react";
import HoverCard from "./HoverCard/HoverCard";
import styled from "./UserContainer.css";
import UserList from "./User/UserList/UserList";

function UserContainer() {
  return (
    <div className="user-container">
      <UserList/>
      <HoverCard/>
    </div>
  );
}

export default UserContainer;
