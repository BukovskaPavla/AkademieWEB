import React from "react"

export const ShoppingItem = ({product, amount, done}) => {
    const tickClass = done
          ? 'item__done item__done--tick'
          : 'item__done';

        return (
          <li className="item">
            <div className="item__product">{product}</div>
            <div className="item__amount">{amount}</div>
            <div className={tickClass}></div>
          </li>
        );
}