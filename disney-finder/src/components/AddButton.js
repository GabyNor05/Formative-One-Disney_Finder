import React from "react";
import plusButton from "../assests/PlusButton.png";

const AddButton = () => {
    return(
        <div className="add-button">
        <img src={plusButton} alt="Add Button" style={{height: '140px', width: '140px'}}/>
        </div>
    )
}

export default AddButton;