import React from "react";
import tigerLily from "../assests/Tigerlily.png";
import tinkerbell from "../assests/Tinkerbell.png";
import Characters from "./Characters";
import { useState } from "react";
import Card from "./ComparisonCard";
import "../css/comparison.css";

function Comparison() {
    const [selectedTitle, setSelectedTitle] = useState(null);
    return (
        <div className="Comparison-page">
            <div className="comparison-container">
                <div className="column small">
                    <img src={tigerLily} alt="Tiger Lily"  style={{height: '400px', width: '145px'}}/>
                </div>
                <div className="column large">
                   <Card />
                </div>

                <div className="column small">
                    <Characters image={tinkerbell} /> 
                </div>
            </div>
        </div>
    );
}

export default Comparison;