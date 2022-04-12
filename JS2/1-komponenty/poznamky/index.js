
/* prvni komponenta -  ulozim si ji do sveho index.js*/

import { ShoppingItem } from "./ShoppingItem/index.js"

/*   const ShoppingItem = (props) => { //react komponenty pouzivaji do zavorek (props) a pak destruktuj
    const { done, product, amount } = props; //destrukturuji si!
    let tickClass = '';
    if (done) {
      tickClass = ' item__done--tick';
    }
  
    return `
      <li class="item">
        <div class="item__name">${product}</div>
        <div class="item__amount">${amount}</div>
        <div class="item__done${tickClass}"></div>
      </li>
    `;
  }; */

/* data ktera hazim do komponenty*/
const items = [
    {
        product: 'Rohlíky',
        amount: '10',
        done: true,
    },
    {
        product: 'Rajčate',
        amount: '1kg',
        done: false,
    },
    {
        product: 'Máslo',
        amount: '250g',
        done: false,
    },
  ];
  
  /*vypsani komponenty na stranku*/

const listElm = document.querySelector('.shopping-list');
for (let i = 0; i < items.length; i += 1) {
  listElm.innerHTML += ShoppingItem(items[i]);
}

