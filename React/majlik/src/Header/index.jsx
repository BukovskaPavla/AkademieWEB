import React from "react";
import "./style.css"


export const Header = (props) => {
    const {account} = props

    const prihlaseny = (account !== undefined) ?
        (<header>
            <div className="topbar container">
            <div className="topbar__brand">
                <div className="logo"></div>
                <div className="company">Mejlík.cz</div>
            </div>
    
            <div className="user">
                <div className="user__name">{account}</div>
                <div className="user__icon"></div>
            </div>
            </div>
        </header>
        )
        :(<header>
            <div class="topbar container">
              <div class="topbar__brand">
                <div class="logo"></div>
                <div class="company">Mejlík.cz</div>
              </div>
      
              <div class="login">Přihlásit se</div>
            </div>
          </header> 

        )

    return prihlaseny
}

