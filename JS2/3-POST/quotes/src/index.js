

console.log('funguju!');


import { Quotes } from './Quotes';


const citat = {
    text: 'J.R.R. Tolkien',
    author: 'Jak naložit se svým časem',
  }

const app = document.querySelector('#app').innerHTML += Quotes(citat);

