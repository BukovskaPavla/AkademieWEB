import React from "react";

export const HlasovaciVybiratko = () => {
    return (
        <label>
            Vyber možnost:
        <select onChange={(udalost) => {
            if (udalost.target.value !== ""){
            alert(`Uživatel zvolil ${udalost.target.value}.`)
        }}}>
      <option></option>
      <option>Ano</option>
      <option>Ne</option>
      <option>Nevím</option>
    </select>
    </label>
    )
}