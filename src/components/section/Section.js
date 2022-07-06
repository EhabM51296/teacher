import React from 'react';
import SectionTitle from './sectionTitle/SectionTitle';
import SectionDesc from './sectionDesc/SectionDesc';
import classes from './section.module.css';

const Section = (props) => {
  return (
        <div className={`${classes[props.class]} ${classes['section']}`}>
          <SectionTitle text={props.title}/>
           <SectionDesc text={props.desc}/>
           {props.children}
        </div>
  );
};

export default Section;
