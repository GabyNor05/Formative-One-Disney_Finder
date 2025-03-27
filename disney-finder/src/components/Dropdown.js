import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/dropdown.css";

const Dropdown = ({ setSelectedTitle }) => {
    const [titles, setTitles] = useState([]); // Store titles as an array
    const [selectedValue, setSelectedValue] = useState(""); // Track the selected value

    useEffect(() => {
        const fetchTitles = async () => {
            let config = {
                method: "get",
                maxBodyLength: Infinity,
                url: "https://Disney-Plus-Top-Movies-and-TV-Shows-API-by-APIRobots.proxy-production.allthingsdev.co/v1/disney-plus-top",
                headers: {
                    Accept: "application/json",
                    'x-apihub-key': '6FAC-eaaR5WSfcTMu00bphCr3-OE2MYui5KKzzjxEcZmoytg9Q',
                    'x-apihub-host': 'Disney-Plus-Top-Movies-and-TV-Shows-API-by-APIRobots.allthingsdev.co',
                    'x-apihub-endpoint': 'ff720095-39c6-4792-9d5c-b947546e1f59'
                },
            };

            try {
                const response = await axios.request(config);
                console.log("API Response:", response.data); // Debugging log

                // Extract the "items" array from the response
                const items = response.data.items;
                setTitles(items); // Set the titles state to the items array
            } catch (error) {
                console.error("Error fetching titles:", error);
            }
        };

        fetchTitles();
    }, []);

    const handleTitleClick = (event) => {
        const selected = titles.find((title) => title.title === event.target.value);
        setSelectedValue(event.target.value); // Update the selected value
        if (selected) {
            setSelectedTitle(selected); // Pass the selected title object to the parent
            console.log(`Selected Title: ${selected.title}`);
        } else {
            console.error("Selected title not found in the titles array.");
        }
    };

    return (
        <div>
            <select
                id="titles-dropdown"
                onChange={handleTitleClick}
                value={selectedValue}
                style={{
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    margin: "10px 0",
                    color: selectedValue === "" ? "gray" : "white", // Change color based on selection
                }}
            >
                <option value="" disabled >
                    -- Choose a Title --
                </option>
                {Array.isArray(titles) && titles.length > 0 ? (
                    titles.map((title, index) => (
                        <option key={index} value={title.title}>
                            {title.title}
                        </option>
                    ))
                ) : (
                    <option disabled>No titles available</option>
                )}
            </select>
        </div>
    );
};

export default Dropdown;