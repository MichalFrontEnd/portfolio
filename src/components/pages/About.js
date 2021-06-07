import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

import img from '../assets/img/about.jpg'
export default function about() {

    return (
        <div>
            <Container fluid className="gen-container">
                <div className="about-container">
                    <img src={img} alt='mfront'/>
                    <div className="about-text">
                        <h2>Hi! I'm Michal Front</h2>
                        <h5>I'm a full stack web developer from Berlin, Germany.</h5>
                        <p></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}