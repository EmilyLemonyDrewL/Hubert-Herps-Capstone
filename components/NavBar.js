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
          <img src="https://firebasestorage.googleapis.com/v0/b/hubertherps.appspot.com/o/HubertHerpslightlogo.png?alt=media&token=c9689a29-3b40-4051-b9d6-0d35bc742e46" alt="logo" style={{ width: '120px' }} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <img src="https://firebasestorage.googleapis.com/v0/b/hubertherps.appspot.com/o/HOMEBUTTON.png?alt=media&token=dddf1d67-1990-4ac8-b590-3ecc3d7a66ef" alt="Home" style={{ width: '220px' }} />
            </Link>
            <Link passHref href="/finds">
              <img src="https://firebasestorage.googleapis.com/v0/b/hubertherps.appspot.com/o/COLLECTIONBUTTON.png?alt=media&token=76cc2db0-7e11-4061-a143-1ee4318aae12" alt="Your Collection" style={{ width: '220px' }} />
            </Link>
            <Link passHref href="/community">
              <img src="https://firebasestorage.googleapis.com/v0/b/hubertherps.appspot.com/o/COMMUNITYBUTTON.png?alt=media&token=b9e2e38b-a3a9-4fd1-9a2c-9c78ca67e857" alt="Community" style={{ width: '220px' }} />
            </Link>
            <Button className="navbar-logout-btn" variant="btn btn-success" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
