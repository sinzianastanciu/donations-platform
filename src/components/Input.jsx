import React from 'react';

const Input = (props) => {
    const { contentLabel, ...rest } = props;
    return (
        <label>
            {contentLabel && <span>{contentLabel}</span>}
            <input {...rest} type={contentLabel=="Password" ? "password" : "text"} className='input'></input>
        </label>
    );
};

export default Input;