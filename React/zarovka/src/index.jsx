import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {Bulb} from "./Bulb"

const App = () => (
  <div className='container'>
  <Bulb on={true} />,
  <Bulb on={false} />,
  <Bulb on={true} />
  </div>
);

createRoot(
  document.querySelector('#app')
).render(<App />, )
