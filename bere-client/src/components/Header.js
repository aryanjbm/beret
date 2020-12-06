import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/Header.css";

export default function Header() {
  return (
    <header className="company_bar">
      <Navbar>
        <Navbar.Brand className="nav-brand" href="#home">
          DVS
        </Navbar.Brand>
        <div className="company_name">
          <h1>D.V. Saharan & Son</h1>
          <br></br>
          <div class="logoline">Goverment Of India Reognized Expert House</div>
        </div>
        <div className="nav">
          <Nav></Nav>
        </div>

        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}
