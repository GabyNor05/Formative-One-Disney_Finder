import React from "react";
import moana2Thumbnail from "../assests/Moana2Thumbnail.png";
import onlyMurdersThumbnail from "../assests/OnlyMurderInTheBuildingThumbnail.png";
import shogunThumbnail from "../assests/ShogunThumbnail.png";
import "../css/thumbnail.css";

function Thumbnail() {
    return (
        <div className = "thumbnail-container">
            <button className="" onClick={() => window.open("https://www.imdb.com/title/tt13622970/", "_blank")}>
                <img className = "thumbnail" src={moana2Thumbnail} alt="Moana 2" />
            </button>
            <button className="" onClick={() => window.open("https://www.imdb.com/title/tt11691774/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Only", "_blank")}>
            <img className = "thumbnail" src={onlyMurdersThumbnail} alt="Only Murders in the Building"  />
            </button>
            <button className="" onClick={() => window.open("https://www.imdb.com/title/tt2788316/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_Shogun", "_blank")}>
            <img className = "thumbnail" src={shogunThumbnail} alt="Shogun" />
            </button>
        </div>
    );
}

export default Thumbnail;