import React from "react";
import "./style.css"

export const Inbox = (props) => {
    const {account, messages} = props
    return (
        <div className="inbox">
            <div className="email">{account}</div>
            {(messages > 0) ? 
                <div className="unread">Nepřečtených zpráv: {messages}</div>
                :
                <div className="no-unread">Žádné nepřečtené zprávy</div>

            }
            
        </div>
    )
}