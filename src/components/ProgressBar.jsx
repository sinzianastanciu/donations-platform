import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed} = props;
  
    const containerStyles = {
      height: 20,
      width: '60%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 10,
      float: 'right'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 10,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
    </div>
    );
  };

  export default ProgressBar;