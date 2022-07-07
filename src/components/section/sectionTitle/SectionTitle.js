import React from 'react';

// import classes from './sectionTitle.module.css';

const SectionTitle = (props) => {
  return (
        <h2 className="sectionTitle txtCenter">
            {props.text}
        </h2>
  );
};

export default SectionTitle;
