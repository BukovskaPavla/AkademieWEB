import { ShoppingList } from './ShoppingList/index.js';
import './style.css'


document.querySelector("#btn-add").addEventListener('click', () => {
const newItem = {
  "action": "addItem",
  "product": document.querySelector("#product").value,
  "amount": document.querySelector("#amount").value,
  "done": false
}
  fetch('https://apps.kodim.cz/daweb/shoplist/api/lists/pavlinka', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',},
    body: JSON.stringify(newItem)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector('#list-container');
      container.innerHTML = ShoppingList({
        items: data.results.items,
      });
    });
});


/* vytvoření nového seznamu*/
/*  fetch('https://apps.kodim.cz/daweb/shoplist/api/lists/pavlinka', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "action": "create"
  })
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector('#list-container');
    container.innerHTML = ShoppingList({
      items: data.results.items,
    });
  });  */


  document.querySelector("#delete").addEventListener('click', () => {
    fetch('https://apps.kodim.cz/daweb/shoplist/api/lists/pavlinka/uTE9n9', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "action": "deleteItem"
  })
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector('#list-container');
    container.innerHTML = ShoppingList({
      items: data.results.items,
    });
  })
})