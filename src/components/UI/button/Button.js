import React from "react";
import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes["btn"]} ${classes[props.class]}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
