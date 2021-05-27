import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

export default function Header() {
    return (
    <Jumbotron fluid>   
        <Container fluid className="header-container">
        <h1>Michal Front</h1>
        <h3 className="sub-header">Full-Stack Web Developer</h3>
        <button>Go</button>
        </Container>
    </Jumbotron>
    )
}