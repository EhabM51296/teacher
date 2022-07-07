import React from 'react';

import classes from './homeImage.module.css';

const HomeImage = (props) => {
  return (
    <div className={`m-left ${classes['homeImgContainer']}`}>
        <img src='./teacher/images/developer.jpg' alt='code' className={classes['homeImg']}/>
    </div>
  );
};

export default HomeImage;
