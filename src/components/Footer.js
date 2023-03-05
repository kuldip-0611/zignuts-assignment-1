import React from "react";
import { Container, Row,Col } from "reactstrap";
import search from '../assets/images/search.svg';
import facebook from '../assets/images/facebook.svg';
import linkdein from '../assets/images/linkedin.svg';


const Footer = () => {
  return (
    <div>
      <Container className="footer-container ">
        <Row>
          <Col >
          <ul type="none">
              <li className="footer-container-h1">sociale</li>
              <li className="footer-container-h2 pt-2"><img src={facebook} className='me-2' />facebook</li>
              <li className="footer-container-h2 pt-2"><img src={linkdein} className='me-2' />LinkedIn</li>
              <li className="footer-container-h2 pt-2"><img src={search} className='me-2' />Google</li>
            </ul>

          </Col>
          <Col >
            <ul type="none">
              <li className='footer-container-h1'>Explore</li>
              <li className="footer-container-h2 pt-2">Service</li>
              <li className="footer-container-h2 pt-2">Team</li>
              <li className="footer-container-h2 pt-2">Client</li>
            </ul>
          </Col>
          <Col>
            <ul type="none">
              <li className='footer-container-h1'>Contact</li>
              <li className="footer-container-h2 pt-2">Lorem Ipsum dummy address</li>
              <li className="footer-container-h2 pt-2">used for display</li>
              <li className="footer-container-h2 pt-2">1234567890</li>
            </ul>
          </Col>
          <Col>
          <ul type="none">
              <li className='footer-container-h1'>Email</li>
              <li className="footer-container-h2 pt-2">mendlesoncommunication@email.com</li>
             
            </ul>
          </Col>
        </Row>
      </Container>
      <p className="text-center">© Copyright 2018 Mendleson Communication Pty Ltd </p>
    </div>
  );
};

export default Footer;
