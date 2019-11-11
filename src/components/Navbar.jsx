import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const NavBar = props => {
  return (
    <>
      <div className="ui fixed inverted menu">
          {props.user ? (
            <NavLink to="/profile" className="red item">
              Profile
            </NavLink>
          ) : (
            <NavLink to="/sign_up" className="blue item">
              Sign Up
            </NavLink>
          )}
          <NavLink to="/explore" className="olive item">
            Explore{" "}
          </NavLink>
          <NavLink to="/messages" className="yellow item">
            Messages{" "}
          </NavLink>
      </div>
    </>
  );
};

export default NavBar;
