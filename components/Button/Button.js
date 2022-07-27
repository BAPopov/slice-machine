import React from "react";
import s from "./Button.module.css";

const Button = ({ title, ...rest }) => {
  return (
    <button className={s.root} {...rest}>
      {title}
    </button>
  );
};

export default Button;
