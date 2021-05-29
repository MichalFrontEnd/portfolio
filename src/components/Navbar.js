import React from 'react'
import { Navbar, Nav, NavLink, Row, Col} from 'reactstrap';


export default function Navibar() {
    return (
            <Row>
                <Col sm={{offset:8}}>
                    <Navbar>
                        <Nav activeKey="/home">
                            <NavLink transparent id="navlink" eventKey="/home" href="#" active>Home</NavLink>
                            <NavLink href="/projects" active eventKey="/projects" id="navlink">Projects</NavLink>
                            <NavLink href="/about" eventKey="/about" active id="navlink">About</NavLink>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
    )
}
