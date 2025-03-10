import React from "react";

const Characters = (character) => {
 return (
    <img src = {character.image} alt = "character" style = {{height: '400px', width: '280px'}}/>
 )
}

export default Characters;