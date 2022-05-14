import React from "react";
import { OrderControls } from "../OrderControls";
import { NotAvailable } from "../NotAvailable";

export const Product = (props) => {
    const { name, img, isAvailable } = props;
  
    return (
      <div className="product">
        <div className="product__name">{name}</div>
        <img className="product__img" src={img} />
        {isAvailable ? <OrderControls /> : <NotAvailable />}
      </div>
    );
  };