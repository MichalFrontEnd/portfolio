import React from "react"

export default function Contactbar() {

    return (
        <div className="contact-container">
                <div>
                    <img src='./images/email.png' alt="email" ></img>
                    <p>michal.front@outlook.com</p>
                </div>
                <div>
                    <label><img src='./images/li.png' alt="divnkedIn" ></img></label>
                    <p>linkedin.com/in/michal-front/</p>
                </div>
                <div>
                    <label><img src='./images/git.png' alt="GitHub" ></img></label>
                    <p>github.com/MichalFrontEnd</p>
                </div>
                <div>
                    <label><img src='./images/house.png' alt="house" ></img></label>
                    <p>Berlin, Germany</p>
                </div>
            </div>
    )
}