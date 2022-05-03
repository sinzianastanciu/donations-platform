import React from "react";
import Filler from "./Filler";

const ProgressBar = ({ done }) => {
    return (
        <div className="progress-bar">
            <div class="progress-done" style={{
                opacity: 1,
                width: `${done}%`
            }}></div>
        </div>
    );
}

export default ProgressBar;