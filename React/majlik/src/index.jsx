import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {Header} from './Header';
import {Inbox} from "./Inbox"

const App = () => (
  <div className="container">
    <Header />
    <Inbox messages={2}/>
    {/* <Inbox account="radovan.holatko@mejlik.cz" messages={0} /> */}
  </div>
);

createRoot(
  document.querySelector('#app')
).render(<App />, );
