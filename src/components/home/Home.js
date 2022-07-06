import React from 'react';
import HomeImage from './HomeImage';
import Button from '../UI/button/Button'
import classes from './home.module.css';

const Home = (props) => {
  return (
    <div className={classes['home']}>
        <HomeImage/>
        <div className='absolute-VHmiddle'>
            <h1 className='txtWhite'>
                Full Stack Developer Course
            </h1>
            <div className="pdT-30"></div>
            <h3 className='txtWhite'>
                Become a full stack developer and make your awsome business idea
                comes true.
            </h3>
            <div className="pdT-30"></div>
            <h3 className='txtWhite'>
                Our course includes Html, css, javascript and php.
            </h3>
            <div className="pdT-30"></div>
            <Button class='primary' text='Join Our Course'/>
        </div>
    </div>
  );
};

export default Home;
