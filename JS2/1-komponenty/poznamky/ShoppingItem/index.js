export const ShoppingItem = (props) => { //react komponenty pouzivaji do zavorek (props) a pak destruktuj
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
  };