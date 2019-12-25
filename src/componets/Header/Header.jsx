import React from 'react';
import classes from './Header.module.css'
import TopNav from './TopNav.jsx'

const Header =()=>{
    return( <header className={classes.header}>
    <img src='http://htmlbook.ru/themes/hb/img/logo.png'></img>
    <TopNav />
  </header>

    );
}


export default Header;