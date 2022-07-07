import React from 'react';
import HomeImage from './HomeImage';
import Button from '../UI/button/Button'
import classes from './home.module.css';

const Home = (props) => {
    const scrollDown = () => {}
  return (
    <div className={classes['home']}>
        <HomeImage/>
        <div className={`${classes["absolute-VHmiddle"]}`}>
            <h1 className='txtWhite title'>
                Full Stack Developer Course
            </h1>
            <div className="pdT-30"></div>
            <h3 className='txtWhite thinDesc'>
                Become a full stack developer and make your awsome business idea
                comes true.
            </h3>
            <div className="pdT-30"></div>
            <h3 className='txtWhite thinDesc'>
                Our course includes Html, css, javascript and php.
            </h3>
            <div className="pdT-30"></div>
            <Button class='primary' text='Join Our Course' onClick={scrollDown}/>
        </div>
    </div>
  );
};

export default Home;
