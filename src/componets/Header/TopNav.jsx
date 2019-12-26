import React from 'react';
import classes from './TopNav.module.css';
import { NavLink } from 'react-router-dom';
const TopNav =()=>{
    return( <nav className={classes.nav}>
    <div className = {`${classes.item}`}>
      <NavLink to='/profile' activeClassName ={classes.active}>Profile</NavLink>
      </div>
    <div className = {classes.item}>
      <NavLink to='/dialogs' activeClassName ={classes.active}>Message</NavLink>
      </div>
    <div className = {classes.item}>
      <NavLink to='#'>News</NavLink>
      </div>
    <div className = {classes.item}>
      <NavLink to='#'>My Friends</NavLink>
      </div>

  </nav>

    );
}


export default TopNav;