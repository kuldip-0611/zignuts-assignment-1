import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import project1 from '../assets/images/project1.svg'
import project2 from '../assets/images/project2.svg'
import project3 from '../assets/images/project3.svg';



const ProjectComponent = () => {
  return (
    <div>
      <Container>
        <Row>
           <Col>
            <img src={project1} />
           </Col>
           
           <Col>
            <div className='project2-3'>
                <img src={project2} className='project2' />
                <img src={project3} />
            </div>
           </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectComponent
