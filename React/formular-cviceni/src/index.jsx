import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [userName, setUserName] = useState("")
  const [country, setCountry] = useState("Česká republika")
  const [souhlas, setSouhlas] =useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uživatel ${userName} ze země ${country} se chce zaregistrovat a ${souhlas===true ? "dostávat pravidelně novinky": "o novinky nemá zájem"}.`)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uživatelské jméno:
        <input onChange={(udalost)=> {setUserName(udalost.target.value)
                                      console.log(userName)}}
         type="text" />
      </label>
      <label>
          Země původu:
          <select 
            value={country}
            onChange={(udalost) => {setCountry(udalost.target.value)}} 
          >
            <option value="Chorvatsko">Chorvatsko</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Polsko">Polsko</option>
            <option value="Slovenská republika">Slovenská republika</option>
          </select>
      </label>
      <input type="checkbox" 
        checked={souhlas}
        onChange={(udalost) => {setSouhlas(udalost.target.checked)}}
        ></input>Chci pravidelně dostávat novinky do mé e-mailové schránky.
      <button type="submit" 
        disabled={userName === ""} 
      >Registrovat</button>
      {userName === "" ? <div>Uživatelské jméno je povinný údaj</div> : null }
    </form>
  );
};

createRoot(
  document.querySelector('#app')
).render(<App />);
