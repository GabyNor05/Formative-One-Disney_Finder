import React from "react";
import DoughnutChart from "./Doughnut";
import tigerLily from "../assests/Tigerlily.png";
import tinkerbell from "../assests/Tinkerbell.png";
import Characters from "./Characters";
import AddButton from "./AddButton";

function Comparison() {
    return (
        <div className="page">
            <div className="comparison-container">
                <div className="column small">
                    <img src={tigerLily} alt="Tiger Lily"  style={{height: '400px', width: '145px'}}/>
                </div>
                <div className="column large">
                    <div className="large-column-content">
                        <div className="TitleText">
                            <h1>Compare Titles</h1>
                        </div>
                        <div className="comparisonChart">
                            {/* doughnut chart card */}
                            <div className="card">
                                <div className="card-content">
                                    <div className="doughnut-chart">
                                        <DoughnutChart />
                                    </div>
                                    <h2>Title 1</h2>
                                    <p className="rating">8.6 rating</p>
                                </div>
                            </div>
                            {/* add button card */}
                            <div className="card">
                                <div className="card-content">
                                        <div style={{height: "50px"}}></div>
                                        <AddButton />
                                </div>
                                <div style={{height: "25px"}}></div>
                                <h2>Add Title</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column small">
                    <Characters image={tinkerbell} /> 
                </div>
            </div>
        </div>
    );
}

export default Comparison;