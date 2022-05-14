import React from 'react'
export const Header = (props) => {
    const {title} = props
    return (<header>
    <div className="logo"></div>
    <h1>{title}</h1>
  </header>)
}
