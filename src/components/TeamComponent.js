import React from "react";
import { Col, Container, Row } from "reactstrap";
import team from "../teamData";
import person1 from '../assets/images/Person1.svg'

const TeamComponent = () => {
  return (
    <>
      <Container>
        <Row>
          {team.map((item) => (
            <Col>
              <img src={item.img} alt="person1 img" />
              <p className="team-name">{item.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TeamComponent;
