import React, { useState } from "react";
import plusButton from "../assests/PlusButton.png";
import "../css/addButton.css"; // Import the CSS file

const AddButton = () => {
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

    const handleClick = () => {
        setShowAlert(true); // Show the custom alert when the button is clicked
    };

    const handleClose = () => {
        setShowAlert(false); // Hide the custom alert
    };

    return (
        <div className="add-button">
            {/* Image button */}
            <img
                src={plusButton}
                alt="Add Button"
                className="add-button-image" // Apply CSS class for styling
                onClick={handleClick} // Attach the click event handler
            />

            {/* Custom alert */}
            {showAlert && (
                <div className="custom-alert">
                    <p className="alert-heading">Important Alert</p>
                    <p>Please select a second option!</p>
                    <button className="alert-button" onClick={handleClose}>
                        OK
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddButton;