import React from "react";


export const OrderControls = () => {
    return (
      <div className="order-controls">
        <button className="btn order-btn">
          <i className="btn__icon icon-order" />
          <span className="btn__text">Vložit do košíku</span>
        </button>
        <button className="btn order-now-btn">
          <i className="btn__icon icon-order-now" />
          <span className="btn__text">Koupit ihned</span>
        </button>
      </div>
    );
  };