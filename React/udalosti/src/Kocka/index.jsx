import React from "react";

export const Kocka = () => {
    return <img 
        on onMouseOver={() => {
            console.log("Kočka chytá myš")
        }}
        src ="data:image/jpeg;base64,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" alt ="kočka" />
}