import React from "react";
import "../css/button.css";

const Button = (props) => {
    return (
        <button className="custom-button" onClick={() => window.location.href = props.link}>
            {props.text}
        </button>
    )
}

export default Button;