import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap';

export default function Header() {
    return (
    <Jumbotron fluid>   
        <Container fluid className="header-container lg">
            <h1 >Michal Front</h1>
            <h3 className="sub-header">Full-Stack Web Developer</h3>
                {/*<button>Placeholder</button>*/}
            <div class="center-con" fluid>
                <div class="round">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Container>
    </Jumbotron>
    )
}