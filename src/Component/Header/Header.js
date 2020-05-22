import React from 'react';
import { GrFacebook } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import './Header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    const handleDefault = e => e.preventDefault()
    return (
        <div className="bg-dark fixed-top">
            <div className="container ">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="/">Sayed Delowar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About me</Nav.Link>
                            <Nav.Link href="/projects">Project</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link target="_blank" href="https://www.linkedin.com/in/sayed-delowar-1894111a3/">
                            <GrLinkedin />
                            </Nav.Link>
                            <Nav.Link target="_blank" href="https://github.com/S-Delowar">
                                <GoMarkGithub />
                            </Nav.Link>
                            <Nav.Link target="_blank" href="https://www.facebook.com/S.Delowar/">
                                <GrFacebook />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;