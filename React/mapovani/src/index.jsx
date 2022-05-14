import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ShoppingItem } from './ShoppingItem';
/* import { Time } from './Time';


const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const emails = names.map((name) => {
  return `${name}@mejlik.cz`;
})

const namesToEmails= names.map((name)=>`${name}@moje-firma.cz`)
const namesToLi = names.map((name)=>`<li>${name}</li>`)
const namesToJsx =names.map((name)=> <li>{name}@moje-firma.cz</li>)
console.log(namesToEmails)
console.log(namesToLi)
console.log(namesToJsx)

export const User = ({ login }) => <div className="user__login">{login}</div>;
names.map((name) => <user login = {name} />) */



/* const dayElements = [
  <li>pondělí</li>,
  <li>úterý</li>,
  <li>středa</li>,
  <li>čtvrtek</li>,
  <li>pátek</li>,
]; */

/* const days = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek'];
//const dayElements = days.map((day) => <li>{day}</li>)
const App = () => (
  <div className="container">
    <h1>Dny v týdnu</h1>
    <ul>{days.map((day) => <li>{day}</li>)}</ul>
  </div>
); */

const list = [
  { id: '10', product: 'mrkev', amount: '3ks', done: false },
  { id: '11', product: 'paprika', amount: '2ks', done: true },
  { id: '12', product: 'cibule', amount: '2ks', done: false },
  { id: '13', product: 'čínské zelí', amount: '1ks', done: true },
  { id: '14', product: 'arašídy', amount: '250g', done: false },
  { id: '15', product: 'sojová omáčka', amount: '1ks', done: false },
];


const App = () => (
  <div className="container">
    <h1>Nákupní seznam</h1>
    <ul className="shopping-list">{
      list.map((item) => (
        <ShoppingItem 
          key= {item.id}
          product = {item.product}
          amount={item.amount} 
          done = {item.done} />
          ))}
    </ul>
  </div>
);

createRoot(
  document.querySelector('#app')
).render(<App />, );
