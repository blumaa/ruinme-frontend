import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const NavBar = props => {
  return (
    <>
      <div className="ui fixed inverted menu">
          {props.currentUser && localStorage.getItem("token") ? (
            <>
            <NavLink to="/profile" className="red item">
              {props.currentUser.display_name}
            </NavLink>
            <NavLink to="/login" className="blue item" onClick={()=> {localStorage.removeItem("token"); props.history.push('/login')}}>Logout</NavLink>
            <NavLink to="/explore" className="olive item">
            Explore
            </NavLink>
            <NavLink to="/messages" className="yellow item">
            Messages
            </NavLink>
            <NavLink to="/requests" className="pink item">
            Requests
            </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/sign_up" className="blue item">
                Sign Up
              </NavLink>
              <NavLink to="/login" className="red item">
                Login
              </NavLink>
            </>
          )}
      </div>
    </>
  );
};

export default NavBar;
