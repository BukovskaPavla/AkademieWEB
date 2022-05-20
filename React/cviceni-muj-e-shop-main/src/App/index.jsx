import React, { useState } from "react";
import Kosik from "../Kosik";
import SeznamProduktu from "../SeznamProduktu";
import "./style.css";

const App = () => {
  const [kosik, setKosik] = useState([]);
  const pridatPolozku = (id, nazev) => {
    const novyKosik = [...kosik]
    const polozkavKosicku = novyKosik.find(polozka => polozka.id === id)
    
    if (polozkavKosicku === undefined){
      novyKosik.push({id: id, nazev:nazev, pocet:1})

    }else {
      polozkavKosicku.pocet += 1
    }
    setKosik(novyKosik)

  }

  const odebratPolozku = (id) => {
    const index = kosik.findIndex(polozka => polozka.id === id)
    const polozkavKosicku= kosik[index]
    const novyKosik = [...kosik]
    if (polozkavKosicku >1){
        polozkavKosicku.pocet -= 1
    } else {
      novyKosik.splice(index, 1)
    }
    setKosik(novyKosik)
  }
  return (
    <>
      <header>
        <div className="logo">Můj e-shop</div>
        <Kosik kosik={kosik} />
      </header>
      <main>
         <SeznamProduktu pridatPolozku={pridatPolozku} odebratPolozku={odebratPolozku}/>
      </main>
    </>
  );
};

export default App;
