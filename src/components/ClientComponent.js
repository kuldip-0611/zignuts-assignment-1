import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import clientdata1 from '../clientdata1';
import clientdata2 from '../clientdata2';


const ClientComponent = () => {
  return (
    <div>
    <Container className='mt-5'>
        <Row>
        {
            clientdata1.map(item=>(
                <Col className='my-auto'>
                    <img src={item.img} />
                </Col>
            ))
        }

        </Row>
        <Row>
        {
            clientdata2.map(item=>(
                <Col className='my-auto'>
                    <img src={item.img} />
                </Col>
            ))
            
        }
        </Row>
    </Container>
      
    </div>
  )
}

export default ClientComponent
