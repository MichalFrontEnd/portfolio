import React from "react"

import {contact} from './contactData'

export default function Contactbar() {

    return (
        <div className="contact-container" fluid>
            {contact.map((item, i) => {
                return (
                    <div className="contact-item" key={i}>
                        <img src={item.icon} alt={item.alt}/>
                        <div></div>
                        {item.link ? (
                            <a href={item.link}><p>{item.text}</p></a> 
                        ): <p>{item.text}</p> }
                    </div>
                )
            })}
        </div>
    )
}