import React from "react";

export const Time = ({ hours, minutes }) => (
      <div className="time">
        <span className="time__hours">{hours}</span>
        :
        <span className="time__mins">{minutes}</span>
      </div>
    )