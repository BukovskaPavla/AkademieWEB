import React from "react"
import "./style.css"

export const Bulb = (props) => {
    const {on} = props
    const zarovka = on  ? " bulb--on" :  "bulb"
    return (
        <div className={zarovka}></div>   
    )}