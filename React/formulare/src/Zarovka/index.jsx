import React from "react"
import srcObrazku from "./zarovka.jpg"
import './style.css'

export const Zarovka = ({barva}) => {
    return (
    <div className="zarovka">
        <img className="zarovka__obrazek" src={srcObrazku} alt="žárovka" />
        <div className="zarovka__barva" 
            style={{backgroundColor:barva}}
        ></div>
    </div>
    )
}