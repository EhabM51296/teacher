import React from 'react';

import HeaderLinks from './HeaderLinks';
import classes from './header.module.css';

const Header = (props) => {
  return (
    <header className={`${classes['header']}`}>
        <div className='flex Width-95 m-auto'>
            <div className={classes['headerLogo']}>Full Stack Developer</div>
            <HeaderLinks />
        </div>
    </header>
  );
};

export default Header;
