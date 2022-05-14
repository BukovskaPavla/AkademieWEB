import React from "react";

export const City = ({name, population, area, district, photo}) => {
    return (
    <div className='city'> 
        <img src={photo} />
        <ul>{name}</ul>
            <li>populace: {population}</li> 
            <li>rozloha: {area}km2</li>
            <li>okres: {district}</li>
    </div>)}
