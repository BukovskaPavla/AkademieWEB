import React from "react";
import "./style.css"

export const Today = (props) => {
    const  {day, month, year} = props
    return (
        <div>
            <span className="day">{day}</span>.
            <span className="month">{month}</span>.         
            <span className="year">{year}</span>
        </div>
    )
}