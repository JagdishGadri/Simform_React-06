import React from "react";
import UserItem from "../UserItem/UserItem";
import { connect } from "react-redux";
import "./UserList.css"

function UserList({userData}) {
  return (
    <div className="user-list">
      <div className="list-title">
        <div>Name</div>
        <div>Status</div>
        <div>Access</div>
      </div>

      <div className="list-data">
        {userData.map((user) => (
          <UserItem
            userFirstName={user.first_name}
            userLastName={user.last_name}
            userPicture={user.avatar}
            userEmail={user.email}
            key={user.id}
            userId={user.id}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    userData : state.data
  }
}



export default connect(mapStateToProps)(UserList);
