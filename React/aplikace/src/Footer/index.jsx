import React from "react";

export const Footer = (props) => {
    const {author} = props
    return (
        <footer>
      <p>{author}</p>
    </footer>
    )
}