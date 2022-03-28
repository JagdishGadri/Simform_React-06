import {
  ON_MOUSE_HOVER,
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const onMouseHover = (id) => {
  return {
    type: ON_MOUSE_HOVER,
    payload: id,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = (userData) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: userData,
  };
};

export const fetchUsersData = (pageNumber) => {
  return (dispatch) => {
    
    dispatch(fetchUsersRequest())
    if(pageNumber===1){
      axios.get("https://reqres.in/api/users?page=1")
    .then(response =>{
      const userData=response.data.data;
      dispatch(fetchUserSuccess(userData))
    })
    }
    else{
      axios.get("https://reqres.in/api/users?page=2")
      .then(response =>{
        const userData=response.data.data;
        dispatch(fetchUserSuccess(userData))
        console.log("hi")
      })
    }
   
  };
};



