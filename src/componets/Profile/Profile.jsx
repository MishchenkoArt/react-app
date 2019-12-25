import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/Myposts.jsx'
const Profile = () => {
  return (<div className={classes.content}>
    <div>
      {/* <img src='http://fifthlabs.com/media/1007/banner06_Banner[1000x100].jpg'></img> */}
    </div>
    <div className = {classes.title}>
      <div className={classes.ava}>
        <img src="https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-1/p160x160/23275397_1638160066258737_2632070356555221987_o.jpg?_nc_cat=110&_nc_ohc=GlaF5feysIAAQl8tWX7nmWfwfXZIfo3O6ZsfWc39xBZSWxiUTkaaC4tHg&_nc_ht=scontent-frx5-1.xx&oh=4b7373f9800a22527dea3cd56b482263&oe=5EAAACDF"></img>

      </div>
      <div className={classes.name}>
        Artem Mishchenko
      </div>
    </div>
    <MyPosts />
  </div>


  );
}


export default Profile;