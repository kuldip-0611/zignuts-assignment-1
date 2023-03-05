import React from "react";
import { Col, Container, Row } from "reactstrap";
import data from "../data";


const Services = () => {
    
  return (
    <>
      <Container>
        {data.map((item) =>  {
            
         return ( <Row className="mt-5">
            <Col className={`${item.order ? 'order-1' : 'order-2'} mt-5`}>
              <div >
                <p className={` ${item.order ? 'text-end' : 'text-start' }   service-text-head `} >{item.imgHeading}</p>
                <p className={` ${item.order ? 'text-end' : 'text-start' }   service-text-content `}>
                 {item.imgText}
                </p>
              </div>
            </Col>
            <Col className={`${item.order ? 'order-2' : 'order-1'} `}>
              <img  src={item.imgLink} className="services-img order-2 " />
            </Col>
          </Row>
        )})}
      </Container>
    </>
  );
};

export default Services;
