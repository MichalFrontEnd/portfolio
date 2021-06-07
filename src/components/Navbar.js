import React, {useState} from 'react'
import { Navbar, Nav, NavLink, Row, Col, activeKey, eventKey} from 'reactstrap';
import classnames from 'classnames';


export default function Navibar() {
    const [active, setActive] = useState(false);
    console.log('active: ', active);
//  const [activeTab, setActiveTab] = useState('1');

//  const toggle = tab => {
//    if(activeTab !== tab) setActiveTab(tab);
//  }

    return (
            <Row>
                <Col sm={{offset:8}}>
                    <Navbar>
                        <Nav tabs onClick={(k) => setActive(true)} >
                            <NavLink active id="navlink" href="/">Home</NavLink>
                            <NavLink active={active} href="/projects"  id="navlink">Projects</NavLink>
                            <NavLink active={active} href="/about" id="navlink">About</NavLink>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
    )
}
