import React from "react";

export const CookieLista = () => {
    const [uzivatelSouhlasil, setUzivatelSouhlasil] = useState(false);
  
    if (uzivatelSouhlasil === false) {
      return (
        <div>
          Tyto webové stránky používají k poskytování svých služeb soubory
          Cookies. Používáním těchto webových stránek souhlasíte s použitím
          souborů Cookies.
          <button
            onClick={() => {
              setUzivatelSouhlasil(true);
            }}
          >
            Souhlasím
          </button>
        </div>
      );
    } else {
      return <div>Uživatel souhlasit</div>;
    }
  };
  