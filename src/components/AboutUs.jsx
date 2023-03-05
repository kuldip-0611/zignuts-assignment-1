import React from "react";
import { Col, Container, Row } from "reactstrap";
import aboutUsimg from "../assets/images/aboutUsimg.svg";
import engagement from '../assets/images/Enagagement.svg';
import communication from '../assets/images/communication.png'

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Row className="row-1">
          <Col>
            <img src={aboutUsimg} alt="about us image" className="aboutus-img" />
          </Col>
          <Col>
            <p className="aboutus-text-heading text-start text-md-center text-sm-center">ABOUT US</p>
            <p className="anoutus-text-content text-start">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
            <Row>
            <Col >
            <div className="engagement-communication text-start mt-3">
                <img src={engagement}  />
                <p className="text-start ec-text-heading">ENGAGEMENT</p>
                <p className="text-start ex-text">We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. READ MORE</p>
            </div>
            </Col>
            <Col>
            <div className="engagement-communication text-start mt-3">
                <img src={communication} />
                <p className="ec-text-heading" >COMMUNICATION</p>
                <p className="ex-text">We are award-winning leaders in communications and campaign management. READ MORE</p>
            </div>
            </Col>
            </Row>


          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default AboutUs;
