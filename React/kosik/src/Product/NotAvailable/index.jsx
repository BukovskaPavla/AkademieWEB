import React from "react";

export const NotAvailable = () => {
    return (
      <div className="not-available">
        <p>Nedostupné</p>
        <p>Sledujte dostupnost produktu</p>
        <button className="btn">
          <i className="btn__icon icon-watch" />
          <span className="btn__text">Sledovat</span>
        </button>
      </div>
    );
  };