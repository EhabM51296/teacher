import React from 'react';
import classes from './sectionDesc.module.css';

const SectionDesc = (props) => {
  return (
    <p className={classes['desc']}>
    {props.text}
</p>
            
        
  );
};

export default SectionDesc;
