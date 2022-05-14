import React from "react";

export const HlasovaciTlacitko = (props) => {
    const {text} = props
    return <button onClick={()=> {
        alert(`Uživatel hlasoval pro ${text}`)
    }}>{text}</button>
}