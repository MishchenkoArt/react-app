import React from 'react';
import classes from './TopNav.module.css';
const TopNav =()=>{
    return( <nav className={classes.nav}>
    <div className = {`${classes.item}`}>
      <a href='#'>Profile</a>
      </div>
    <div className = {classes.item}>
      <a href='#'>Message</a>
      </div>
    <div className = {classes.item}>
      <a href='#'>News</a>
      </div>
    <div className = {classes.item}>
      <a href='#'>My Friends</a>
      </div>

  </nav>

    );
}


export default TopNav;