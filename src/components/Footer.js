import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import gitHubIcon from '../assets/icons/github-white.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'
import linkedinIcon from '../assets/icons/linkedIn.svg'
import emailIcon from '../assets/icons/email.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-item-center">
             <Col sm={6}>
             </Col>
             <Col sm={6} className="text-center text-sm-end">
                <div className='social-icon'>
                  <a href='https://github.com/DylanP97?tab=repositories' className='github'><img src={gitHubIcon} alt="" /></a>
                  <a href='https://wa.me/+33788485314' className='whatsapp'><img src={whatsappIcon} alt="" /></a>
                  <a href='mailto:dylan.pinheiro.1997@gmail.com' className='email-icon'><img src={emailIcon} alt="" /></a>
                  <a href='https://www.linkedin.com/in/dylan-pinheiro-idy/' className='linkedin'><img src={linkedinIcon} alt="" /></a>
                </div>
             </Col>
            </Row>
        </Container>
    </footer>
  )
}
