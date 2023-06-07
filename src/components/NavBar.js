import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import gitHubIcon from '../assets/icons/github-white.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'
import linkedinIcon from '../assets/icons/linkedIn.svg'
import emailIcon from '../assets/icons/email.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a className="github" href='https://github.com/DylanP97?tab=repositories'><img src={gitHubIcon} alt="" /></a>
                    <a className="whatsapp" href='https://wa.me/+33788485314'><img src={whatsappIcon} alt="" /></a>
                    <a className="email-icon" href='mailto:dylan.pinheiro.1997@gmail.com'><img src={emailIcon} alt="" /></a>
                    <a className="linkedin" href='https://www.linkedin.com/in/dylan-pinheiro-idy/'><img src={linkedinIcon} alt="" /></a>
                </div>
                <button className='vvd' onClick={() => (window.location.href="#contact")}><span>Let's Connect</span></button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}