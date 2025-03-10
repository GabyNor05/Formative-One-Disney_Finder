import React from "react";
import moana2Thumbnail from "../assests/Moana2Thumbnail.png";
import onlyMurdersThumbnail from "../assests/OnlyMurderInTheBuildingThumbnail.png";
import shogunThumbnail from "../assests/ShogunThumbnail.png";

function Thumbnail() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <img src={moana2Thumbnail} alt="Moana 2" style={{ height: '123px', width: '190px', borderRadius: '10px' }} />
            <img src={onlyMurdersThumbnail} alt="Only Murders in the Building" style={{ height: '123px', width: '190px', borderRadius: '10px' }} />
            <img src={shogunThumbnail} alt="Shogun" style={{ height: '123px', width: '190px', borderRadius: '10px' }} />
        </div>
    );
}

export default Thumbnail;