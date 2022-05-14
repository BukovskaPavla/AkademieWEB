import React from "react";

export const TrhaciKalendar = () => {
    const [denVTydnu, setDenVTydnu] = useState(2)
    return <div>Den v týdnu: {denVTydnu}
    <button onClick={() =>{
        let dalsidenVTydnu = denVTydnu + 1
        if(dalsidenVTydnu === 8) {
            dalsidenVTydnu =1
        }
        setDenVTydnu(dalsidenVTydnu)
    }} ></button></div>
}