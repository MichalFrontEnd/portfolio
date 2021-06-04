import React, {useState} from 'react'
import { Navbar, Nav, NavLink, Row, Col, activeKey, eventKey} from 'reactstrap';


export default function Navibar() {
    const [active, setActive] = useState(false);

    return (
            <Row>
                <Col sm={{offset:8}}>
                    <Navbar>
                        <Nav activeKey="/home">
                            <NavLink id="navlink" eventKey="/home" href="/">Home</NavLink>
                            <NavLink href="/projects" eventKey="/projects" id="navlink">Projects</NavLink>
                            <NavLink href="/about" eventKey="/about" id="navlink">About</NavLink>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
    )
}
