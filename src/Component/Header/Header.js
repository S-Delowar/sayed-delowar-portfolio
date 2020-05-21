import React from 'react';
import IconLinkedin from '../../images/icon-linkedin.png';
import IconGit from '../../images/icon-github.png';
import IconFacebook from '../../images/fb.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const handleDefault = e => e.preventDefault()
    return (
        <div className="bg-light fixed-top" >
            <nav className="navbar container navbar-expand-lg navbar-light  d-flex justify-content-between">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">Sayed Delowar</Link>
                <ul className="nav justify-content-center">
                    <li className="nav-item" >
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About me</Link>
                        {/* <a className="nav-link" href="/about">About me</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className="nav justify-content-end">
                    <li>
                        <a className="nav-link icon" target="_blank" href="https://www.linkedin.com/in/sayed-delowar-1894111a3/">
                        <img src={IconLinkedin} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link icon " target="_blank" href="https://github.com/S-Delowar">
                            <img src={IconGit} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link icon  " target="_blank" href="https://www.facebook.com/S.Delowar/">
                            <img src={IconFacebook} alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;