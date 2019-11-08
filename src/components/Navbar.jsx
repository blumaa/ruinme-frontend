import React from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = (props) => {

  return (
    <div className="ui menu">
      {props.user ?
      <NavLink to='/profile' className='item'> Profile</NavLink>
      : <NavLink to='/signup' className='item'>Sign Up</NavLink> }

      <NavLink to='/explore' className='item'> Explore </NavLink>
      <NavLink to='/messages' className='item'> Messages </NavLink>
    </div>
  );
}

export default NavBar;
