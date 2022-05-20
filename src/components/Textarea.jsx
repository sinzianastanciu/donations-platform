import React, { forwardRef } from 'react';

const Textarea = forwardRef((props, ref) => {
    const { icon, ...rest } = props;
    return (
      <label>
        {icon}
        <textarea className={`textarea`} {...rest} ref={ref} />
      </label>
    );
  });

export default Textarea;