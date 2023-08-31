/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-color">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="text-white">Hubert Herps</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link className="text-white">Home</Nav.Link>
            </Link>
            <Link passHref href="/finds">
              <Nav.Link className="text-white">Your Collection</Nav.Link>
            </Link>
            <Link passHref href="/community">
              <Nav.Link className="text-white">Community</Nav.Link>
            </Link>
            <Button variant="btn btn-success" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
