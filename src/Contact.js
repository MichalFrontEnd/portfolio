import React from "react"

export default function Contact() {


    return (
        <div className="contact-container">
            <ul>
                <li>
                    <img src='./images/email.png' alt="email" ></img>
                    <p>michal.front@outlook.com</p>
                </li>
                <li>
                    <label><img src='./images/li.png' alt="LinkedIn" ></img></label>
                    <p>https://www.linkedin.com/in/michal-front/</p>
                </li>
                <li>
                    <label><img src='./images/git.png' alt="GitHub" ></img></label>
                    <p>http://github.com/MichalFrontEnd</p>
                </li>
                <li>
                    <label><img src='./images/house.png' alt="house" ></img></label>
                    <p>Berlin, Germany</p>
                </li>
            </ul>
        </div>
    )
}