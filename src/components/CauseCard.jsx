import React from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const CauseCard = ({id, title, zone, target, amountRaised, handleClick }) => {

    var percentage;
    if ( Math.round(amountRaised * 100 / target ) >= 100) {
        percentage = 100;
    } else {
        percentage = Math.round(amountRaised * 100 / target );
    }

    return (
        <div className="cause-card">
            <div className="cause-progress">
                <div className="target"><span>{amountRaised} / {target}$</span></div>
                <ProgressBar bgcolor="#28666E" completed={ percentage }/> 
            </div>
            <div className="cause-details">
                <div className="cause-details-title">
                    <h3>{title}</h3>
                </div>
                <div className="cause-details-zone">
                    <h3>{zone}</h3>
                </div>
                <Link to={`/causes/${id}`}>
                    <Button onClick={() => handleClick({ title })}>Details</Button>
                </Link>
             
            </div>
            
        </div>
    );
};

export default CauseCard;