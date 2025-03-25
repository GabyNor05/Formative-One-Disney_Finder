import React from "react";
import moana2Thumbnail from "../assests/Moana2Thumbnail.png";
import onlyMurdersThumbnail from "../assests/OnlyMurderInTheBuildingThumbnail.png";
import shogunThumbnail from "../assests/ShogunThumbnail.png";
import "../css/thumbnail.css";
function Thumbnail() {
    return (
        <div className = "thumbnail-container">
            <img className = "thumbnail" src={moana2Thumbnail} alt="Moana 2" />
            <img className = "thumbnail" src={onlyMurdersThumbnail} alt="Only Murders in the Building"  />
            <img className = "thumbnail" src={shogunThumbnail} alt="Shogun" />
        </div>
    );
}

export default Thumbnail;