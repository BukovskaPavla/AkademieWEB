import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [datetime, setDatetime] =useState("")
  const [timezone, setTimezone] = useState("Europe/Prague")
  
  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => setDatetime(data.datetime));
  }, [timezone]);
 
  return (
    <>
      <div>Nastavujeme čas</div>
      <a>{`zadaný čas: ${datetime}`}</a>
      <form action="">
        <select 
          value={timezone}
          onChange={(udalost) => 
          setTimezone(udalost.target.value)}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </form>
    </>
  );
};

createRoot(
  document.querySelector('#app')
).render(<App />);
