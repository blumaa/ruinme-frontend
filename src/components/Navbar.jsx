import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = (props) => {

  return (
    <div className="App">
      {props.user ?
      <NavLink to='/profile' activeClassName='active'> Profile</NavLink>
      :<Fragment><NavLink to='/sign_up' activeClassName='active'>Sign Up</NavLink> <NavLink to='/login' activeClassName='active'>Log In</NavLink> </Fragment> }

      <NavLink to='/explore' activeClassName="active"> Explore </NavLink>
      <NavLink to='/messages' activeClassName="active"> Messages </NavLink>
    </div>
  );
}

export default NavBar;
