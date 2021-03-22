import React from "react";

function Wrapper(props) {
    return (
        <div className="desktop">
            {props.children}
        </div>
    );
};

export default Wrapper;