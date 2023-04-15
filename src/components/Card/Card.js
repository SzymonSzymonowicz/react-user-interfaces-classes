import React from "react";
import './Card.css';

function Card(props) {
    return (
        <div className={"card " + props?.size}>
            {props.children}
        </div>
    );
}

export default Card;