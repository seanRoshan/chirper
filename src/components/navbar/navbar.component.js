import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

import logo from "../../styles/svg/logo.svg";
import {Link} from "react-router-dom";

function NavbarComponent(props) {
    return (
        <Navbar className="navbar navbar-dark">
            <Navbar.Brand>
                <img
                    alt="Chirper"
                    src={logo}
                    className="navbar-brand-logo"
                />
                <Link className="navbar-link" to="/">Chirper</Link>
            </Navbar.Brand>
            <Nav>

                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/new">New Tweet</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;
