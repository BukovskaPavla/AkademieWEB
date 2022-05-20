import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Zarovka } from './Zarovka';

const App = () => {
  const [barva, setBarva] = useState("#befa05")
  const[idZarovky, setIdZarovky] = useState("")
  return(
  <div className="container">
    <form onSubmit={(udalost) => {
      udalost.preventDefault()
      fetch(`https://czechitas-chytra-domacnost.herokuapp.com/api/thing/${idZarovky}`, {
	    method: 'POST',
	    body: JSON.stringify({
		  color: barva,
	}),
})
    }}>
      <select
        values={idZarovky}
        onChange={(udalost) => 
          setIdZarovky(udalost.target.value)}>
        <option value="rgb-da120a-799ddd">Obyvák</option>
        <option value="rgb-a5f3b4-270c55">Pokojíček</option>
        <option value="rgb-1bfd58-93922d">kuchyň</option>
      </select>
      <Zarovka barva={barva}/>
      <input 
        value={barva}
        onChange={(udalost)=> {
        setBarva(udalost.target.value)
      }}/>
      <input 
        value={barva}
        type="color"
        onChange={(udalost)=> {
        setBarva(udalost.target.value)
      }}/>
      <button type='submit'>nastavit</button>
    </form>
  </div>
  )
};

createRoot(
  document.querySelector('#app')
).render(<App />);
