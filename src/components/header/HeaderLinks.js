import React from 'react';

import classes from './headerLinks.module.css';
const HeaderLinks = (props) => {
  const headerLinks = [
    {
      name: 'home',
      id: '1',
    },
    {
      name: 'services',
      id: '2',
    },
    {
      name: 'about us',
      id: '3',
    },
  ];
  return (
    <div className='Width-Fill'>
      <ul className={`${classes['nav']} headerLinks flex ${classes[props.visible]}`}>
      {headerLinks.map((link) => (
          <li key={link.id}>
            {link.name}
          </li>
        ))}
        <li className={classes["specialLink"]}>
          Contact us
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
