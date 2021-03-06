import React from 'react'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'

const Navbare = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Paris search and list</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/">
          Liste
        </NavItem>
        <NavItem eventKey={2} href="/search">
          Search
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navbare
