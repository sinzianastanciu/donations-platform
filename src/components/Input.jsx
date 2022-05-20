import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const { icon, ...rest } = props;
    return (
      <label>
        {icon}
        <input className={`input`} {...rest} ref={ref} />
      </label>
    );
  });

export default Input;