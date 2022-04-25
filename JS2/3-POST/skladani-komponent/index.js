import { ShoppingList } from './ShoppingList/index.js';

const jmenoSeznamu = document.querySelector("#seznam").value



document.querySelector("#btn-add").addEventListener('click', () => {
  const jmenoSeznamu = document.querySelector("#seznam").value
const newItem = {
  "action": "addItem",
  "product": document.querySelector("#product").value,
  "amount": document.querySelector("#amount").value,
  "done": true
}
  fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/${jmenoSeznamu}`, {
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
document.querySelector("#vytvorSeznam").addEventListener("click", () => {
  const jmenoSeznamu = document.querySelector("#seznam").value

fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/${jmenoSeznamu}`, {
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
  /* .then((data) => {
    const container = document.querySelector('#list-container');
    container.innerHTML = ShoppingList({
      items: data.results.items,
    });
  });  */
})



  /* odstranení položky**/
  document.querySelector("#delete").addEventListener('click', () => {
    const jmenoSeznamu = document.querySelector("#seznam").value
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/${jmenoSeznamu}/I6chxe`, {
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

/*odstraneni seznamu*/
document.querySelector("#smazSeznam").addEventListener("click", ()=>{
  const jmenoSeznamu = document.querySelector("#seznam").value
  fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/${jmenoSeznamu}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "action": "delete" 
    })
  })
  .then((response) => {
    return response.json()
  })
})