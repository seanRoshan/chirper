import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

import logo from "../../styles/svg/logo.svg";
import {Link, NavLink} from "react-router-dom";

function NavbarComponent(props) {
    const {isLoading} = props;
    return (
        <Navbar className="navbar navbar-dark">
            <Navbar.Brand>
                <img
                    alt="Chirper"
                    src={logo}
                    className={isLoading ? "navbar-brand-logo spin" : "navbar-brand-logo"}
                />
                <Link className="navbar-link" to="/">Chirper</Link>
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={NavLink} to="/" exact activeClassName='active'>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/new" exact activeClassName='active'>New Tweet</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;
