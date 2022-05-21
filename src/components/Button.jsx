import React from "react";

const Button = ({ children, disable, ...rest }) => {
  return (
    <button disabled={disable} className="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
