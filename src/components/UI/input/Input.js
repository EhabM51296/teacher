import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  return (
    <input
    type={props.type}
    placeholder={props.text}
    className={`sectionText ${classes["input"]}`}
    />
  );
};

export default Input;
