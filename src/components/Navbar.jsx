import React from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
const NavBar = props => {
  return (
    <>
      <div className="ui fixed inverted menu">
          {props.user ? (
            <NavLink to="/profile" className="olive item">
              Profile
            </NavLink>
          ) : (
            <NavLink to="/signup" className="blue item">
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
