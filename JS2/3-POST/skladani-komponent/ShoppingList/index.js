import { ShoppingItem } from '../ShoppingItem/index.js';

export const ShoppingList = (props) => {
  const { items } = props;
  let resultHTML = '<ul class="shopping-list">';
  for (let i = 0; i < items.length; i += 1) {
    resultHTML += ShoppingItem(items[i]);
  }

  return resultHTML + '</ul>';
};
