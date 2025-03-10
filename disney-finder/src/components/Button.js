import React from "react";

//I need to create a button that is width: 425px height: 130px and has a border-radius of 10px colour #19BACC and text colour #FFFFFF
//The button should have a hover effect that changes the background colour to #D9D9D9 and the text colour to #19BACC. this component should take in a prop called text that will be the text displayed on the button.
//The button needs to accept a prop that will take string that will take the user to a new page when clicked.
/* 
const Button = (props) => {
    return (
        <button style={{ width: '280px', height: '80px', borderRadius: '30px', backgroundColor: '#19BACC', color: '#FFFFFF', border: 'none', fontSize: '30px'}}>
            {props.text}
        </button>
    )
} */

const Button = (props) => {
    return (
        <button className="custom-button" onClick={() => window.location.href = props.link}>
            {props.text}
        </button>
    )
}

export default Button;