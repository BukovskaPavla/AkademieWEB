import React from "react";
import {Today} from "../Today"

export const App = () => {
    return(
        <div className="container">
            <Today day= "07" month= "12" year= "2022"/>
            <Today day= "08" month= "11" year= "2021"/>
            <Today day= "09" month= "10" year= "2020"/>
        </div>
    )
}


