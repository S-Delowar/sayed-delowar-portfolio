import React from 'react';
import './HeaderTest.css';
import { GrFacebook } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const HeaderTest = () => {
    return (
        <div className="header bg-dark">
            <div className="container text-white">
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <NavLink className="navbar-brand navbar-header" to="/">Sayed Delowar</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
                            <NavLink className="menu-item" to="/">Home</NavLink>
                            <NavLink className="menu-item" to="/about">About me</NavLink>
                            <NavLink className="menu-item" to="/projects">Project</NavLink>
                            <NavLink className="menu-item" to="/blog">Blog</NavLink>
                            <NavLink className="menu-item" to="/contact">Contact</NavLink>
                            <a className="menu-item" target='_blank' href="https://drive.google.com/file/d/15idLjv05kyUS32TgLLW06X_zGqJRmDZA/view" >Resume</a>                            
                        </Nav>
                        <Nav>
                            <a className="menu-item-link" target="_blank" href="https://www.linkedin.com/in/sayed-delowar-1894111a3/">
                                <GrLinkedin />
                            </a>
                            <a className="menu-item-link" target="_blank" href="https://github.com/S-Delowar">
                                <GoMarkGithub />
                            </a>
                            <a className="menu-item-link" target="_blank" href="https://www.facebook.com/S.Delowar/">
                                <GrFacebook />
                            </a>
                        </Nav>
  </Navbar.Collapse>
</Navbar> 
        </div>
        </div>
    );
};

export default HeaderTest;