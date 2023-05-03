import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div fluid>
      <Container fluid className="header-container m">
        <h1>Michal Front</h1>
        <h3 className="sub-header">Full-Stack Web Developer</h3>
        <Link to="/projects">
          <div class="center-con" fluid>
            <div class="round">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </Link>
      </Container>
    </div>
  );
}
