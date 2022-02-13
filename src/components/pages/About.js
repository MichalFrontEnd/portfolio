import React from 'react';
import { Container,} from 'reactstrap';

import img from '../assets/img/about.jpg'
import Contactbar from "../Contactbar"

export default function about() {
    return (
        <div>
            <Container fluid className="gen-container" size="m">
                <div className="about-container mt-5">
                    <img src={img} alt='mfront' className="me"/>
                    <div className="about-text">
                        <h2>I'm Michal Front</h2>
                        {/*<Contactbar />*/}
                        <h4>A full stack web developer from Berlin, Germany.</h4>

                        <p>I have a strong affinity to the Front-End side of things, though I do enjoy getting my hands dirty on some server work.
I currently work in JavaScript, focusing mainly on React.
While always striving to learn and implement new things, I also love to dive deeper into the nitty-gritty of my current stack.</p>
                        
                        <p>In my spare time I enjoy classical singing, swing dancing, sewing and embroidery.</p>
                        <p>Available for work.</p>
                    </div>
                <Contactbar />
                </div>
            </Container>
        </div>
    )
}