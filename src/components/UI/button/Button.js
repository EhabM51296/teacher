import React from "react";
import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button 
    className={`${classes["btn"]} ${classes[props.class]}`}
    type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
