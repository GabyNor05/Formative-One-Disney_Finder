import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DoughnutChart from "./Doughnut";
import AddButton from "./AddButton";

const Card = () => {
    const [selectedTitle, setSelectedTitle] = useState(null); // State to store the first selected title
    const [secondSelectedTitle, setSecondSelectedTitle] = useState(null); // State to store the second selected title
    const [isSelectingSecond, setIsSelectingSecond] = useState(false); // State to track if selecting the second title

    const handleDropdownSelection = (selected) => {
        if (isSelectingSecond) {
            setSecondSelectedTitle(selected); // Update the second title
            setIsSelectingSecond(false); // Reset to selecting the first title
        } else {
            setSelectedTitle(selected); // Update the first title
            setIsSelectingSecond(true); // Switch to selecting the second title
        }
    };

    return (
        <div>
            <div className="large-column-content">
                <div className="TitleText">
                    <h1>Compare Titles</h1>
                </div>
                <div className="dropdown">
                    <h3>Select 2 Titles:</h3>
                    <Dropdown setSelectedTitle={handleDropdownSelection} />
                </div>
                <div className="comparisonChart">
                    {/* Doughnut chart card for the first title */}
                    <div className="card">
                        <div className="card-content">
                            <div className="doughnut-chart">
                                <DoughnutChart selectedTitle={selectedTitle} />
                            </div>
                            <h2>{selectedTitle ? selectedTitle.Title : "Title"}</h2>
                            <p className="rating">
                                {selectedTitle ? `IMDb: ${selectedTitle.imdbRating || "N/A"}` : "rating"}
                            </p>
                        </div>
                    </div>
                    {/* Doughnut chart card for the second title or Add Button */}
                    <div className="card">
                        <div className="card-content">
                            {secondSelectedTitle ? (
                                <>
                                    <div className="doughnut-chart">
                                        <DoughnutChart selectedTitle={secondSelectedTitle} />
                                    </div>
                                    <h2>{secondSelectedTitle.Title}</h2>
                                    <p className="rating">IMDb: {secondSelectedTitle.imdbRating || "N/A"}</p>
                                </>
                            ) : (
                                <>
                                    <div style={{ height: "50px" }}></div>
                                    <AddButton />
                                    <div style={{ height: "25px" }}></div>
                                    <h2>Add Title</h2>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;