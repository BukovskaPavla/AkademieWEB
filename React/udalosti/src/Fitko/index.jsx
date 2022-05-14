import React from "react";

export const Fitko = () => {
    const [pocetKliku, setPocetKliku] = useState(0)
    return (
        <div>
            Uživatel udělal {pocetKliku} kliků.
        <button onClick={()=>{
            setPocetKliku(pocetKliku +1)
        }}>klikni</button>
        </div>
    )
}