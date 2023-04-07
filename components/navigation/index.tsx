import { INavigation } from 'MKL/interfaces';
import Link from 'next/link'
import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation: FC<INavigation> = (navigation) => {
  console.log(navigation.children)
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigation.children.map((child, index) => {
                return (
                  <Link key={index} href={`${encodeURIComponent(child.slug)}`}>
                    {child.name}
                  </Link>
                )
              })}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation