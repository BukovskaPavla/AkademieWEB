import './style.css'
export const ShoppingItem = (props) => {
  const { product, amount, done } = props;

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
};