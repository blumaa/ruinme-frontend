import React from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = (props) => {

  return (
    <div className="App">
      {props.user ?
      <NavLink to='/profile' activeClassName='active'> Profile</NavLink>
      : <NavLink to='/signup' activeClassName='active'>Sign Up</NavLink> }

      <NavLink to='/explore' activeClassName="active"> Explore </NavLink>
      <NavLink to='/messages' activeClassName="active"> Messages </NavLink>
    </div>
  );
}

export default NavBar;
