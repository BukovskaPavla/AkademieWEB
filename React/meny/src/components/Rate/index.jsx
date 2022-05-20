import React, { useState } from 'react';
import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 }
};


const Rate = ({mena, castka}) => {

  return (
    <div className="rate">
      <div className="rate__currency">1 {mena}</div>
      <div>=</div>
      <div className="rate__value">{castka} CZK</div>
    </div>
  );
};

export default Rate;


//currencies[mena].CZK