import React from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

const CauseCard = ({ title, zone, target, raisedMoney }) => {
    const percentage = ({ raisedMoney, target}) => {
        return raisedMoney * 100 / target;
    }
    return (
        <div className="cause-card">
            <div className="cause-progress">
                <ProgressBar done={ percentage }/>
                <h4>{raisedMoney}/{target}</h4>
            </div>
            <div className="cause-details">
                <div className="cause-details-title">
                    <h3>{title}</h3>
                </div>
                <div className="cause-details-zone">
                    <h3>{zone}</h3>
                </div>
            </div>
            <Button onClick={() => handleClick({ title })}>Details</Button>
        </div>
    );
};

export default CauseCard;