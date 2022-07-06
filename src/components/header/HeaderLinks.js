import React from 'react';

import Button from '../UI/button/Button';
import classes from './headerLinks.module.css';

const HeaderLinks = () => {
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
      <ul className={classes['nav']}>
      {headerLinks.map((link) => (
          <li key={link.id}>
            {link.name}
          </li>
        ))}
        <li>
          <Button text='contact us' class='primary' type='button'></Button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
