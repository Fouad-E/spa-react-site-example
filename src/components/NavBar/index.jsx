import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/" activeClassName="active" tag={RRNavLink}> LSF </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/Histoire" activeClassName="active" tag={RRNavLink}>Histoire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/AlphabetLSF" activeClassName="active" tag={RRNavLink}>Alphabet LSF</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Démo</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;


/*

      <Nav pills>
        <NavItem>
          <NavLink href="../Home" active>LSF</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="../Histoire">Histoire</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disable href="../AlphabetLSF"> Alphabet LSF</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disable href="../Histoire">A propos</NavLink>
        </NavItem>
      </Nav>

      */