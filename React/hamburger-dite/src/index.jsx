import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({text, onSelectItem}) => {
  return (
    <a href="#" className="menu-item"
      onClick={()=>onSelectItem(text)}>
      {text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] =useState(false)
  const [pageTitle, setPageTitle] = useState("Domů")
  
  const handleSelectItem = (nadpis)=>{
    setMenuOpened(false)
    setPageTitle(nadpis)
    
  }
  
  return (
    <>
      <header>
        <div className={menuOpened===true? "menu": "menu menu--closed"}>
          <button className="menu__btn"
          onClick={()=> menuOpened===true? setMenuOpened(false): setMenuOpened(true)}></button>
           
            {menuOpened===true
              ? <div className="menu__items">
                <MenuItem text="Domů" onSelectItem={handleSelectItem} />
                <MenuItem text="Naše nabídka" onSelectItem={handleSelectItem}/>
                <MenuItem text="Náš tým" onSelectItem={handleSelectItem}/>
                <MenuItem text="Blog" onSelectItem={handleSelectItem}/>
                <MenuItem text="Kontakt" onSelectItem={handleSelectItem}/>
                </div>
              : null }
            
            
          
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
