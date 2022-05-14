import React from "react";

export const TalcitkoKonzole = () => {
    const proved = () => {
        console.log("Detekkuj kliknutí")
        console.log("Uživatel klikl na tlačítko")
    }
    return <button onClick={proved}>Vypiš do konzole</button>
}