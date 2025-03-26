import React from "react";

const LineComponent: React.FC = () => {
    return (
        <svg width="400" height="20">
            <line x1="0" y1="10" x2="250" y2="10" stroke="white" strokeWidth="1" />
        </svg>
    );
};

export default LineComponent;
