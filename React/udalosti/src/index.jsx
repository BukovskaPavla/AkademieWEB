import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { TlacitkoSBub } from './TlacitkoSBub';
import { TalcitkoKonzole } from './TlacitkoKonzole';
import { Kocka } from './Kocka'
import { HlasovaciTlacitko } from './HlasovaciTlacitko';
import { HlasovaciVybiratko } from './HlasovaciVybiratko';
import { CookieLista } from './CookieLista';
import { Fitko } from './Fitko';
import { TrhaciKalendar } from './TrhaciKalendar';



const App = () => {
const zobrazKocku = true
const moznosti =["Ano", "Ne", "Možná", "Nevím"]
return(

  <div className="container">
    <h1>Ahoj, jdeme se učit události</h1>
    <CookieLista />
    <Fitko />
    <TrhaciKalendar />
    {zobrazKocku ? <span>Pravda</span> : <span>Lež</span>}
    <hr />
    <TlacitkoSBub />
    <TalcitkoKonzole />
    <button onClick={() => {alert("Baf")}}>Chyba</button>
    <Kocka />
    <hr />
    <HlasovaciTlacitko text={moznosti}/>
    
    <hr />
    <HlasovaciVybiratko />
    <hr />
    <input type="password" onChange={(udalost)=> {
      console.log(
        udalost.target.value.length > 5 
          ? "Heslo je bezpečné" 
          : "Heslo je slabé")
    }}/>
    
  </div>
  )
  };

createRoot(
  document.querySelector('#app')
).render(<App />);
