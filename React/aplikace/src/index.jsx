import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';

const App = () => (
  <div className="container">
    <Header title="moje prvni komponenta v Reactu :-)"/>
    <Main content= "to je vzruso" />
    <Footer author = "Paja" />
    
  </div>
);

createRoot(
  document.querySelector('#app')
).render(<App />, );
