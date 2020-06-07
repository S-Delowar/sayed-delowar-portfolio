import React from 'react';
import './Header.css';
import { GrFacebook } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header fixed-top bg-dark">
            <div className="container text-white">
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <NavLink className="navbar-brand " to="/">Sayed Delowar</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
                            <NavLink className="menu-item" to="/">Home</NavLink>
                            <NavLink className="menu-item" to="/about">About me</NavLink>
                            <NavLink className="menu-item" to="/projects">Project</NavLink>
                            <NavLink className="menu-item" to="/blog">Blog</NavLink>
                            <NavLink className="menu-item" to="/contact">Contact</NavLink>
                            <a className="menu-item" target='_blank' href="https://drive.google.com/file/d/1ezUYDDVC2pfv19u2lRdK_2ERkqPYxv-x/view?usp=sharing" >Resume</a>                            
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

export default Header;