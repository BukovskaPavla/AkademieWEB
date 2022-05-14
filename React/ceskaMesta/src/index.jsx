import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { City } from './City';
import { cities } from './cz-cities';

/* const cities = [
  {
    name: 'Praha',
    population: 1324277,
    area: 496.21,
  },
  {
    name: 'Brno',
    population: 381346,
    area: 230.18,
  },
  {
    name: 'Ostrava',
    population: 287968,
    area: 214.23,
  },
  {
    name: 'Plzeň',
    population: 174842,
    area: 137.67,
  },
  {
    name: 'Liberec',
    population: 104802,
    area: 106.09,
  },
  {
    name: 'Olomouc',
    population: 100663,
    area: 103.33,
  },
  {
    name: 'České Budějovice',
    population: 94463,
    area: 55.6,
  },
  {
    name: 'Hradec Králové',
    population: 92939,
    area: 105.69,
  },
  {
    name: 'Ústí nad Labem',
    population: 92716,
    area: 93.97,
  },
  {
    name: 'Pardubice',
    population: 91727,
    area: 82.66,
  },
]; */

//const cityElement = cities.map((city) => <div className='city'>{city}</div>)



const App = () => (
  <div className="container">{
    cities.map((city) => (
      <City  
        photo= {city.photo}
        name={city.name} 
        population={city.population} 
        area={city.area}
        district= {city.district}
        />
    ))
      
  }
  </div>
)

createRoot(
  document.querySelector('#app')
).render(<App />, );
