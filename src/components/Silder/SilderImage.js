
import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function SilderImage() {
  return (
    <div>
      <Row className="slide-main-row" style={{margin:"auto", width: "90%"}}>
        <Col >
    <Carousel>
        <Carousel.Item interval={2}>
          <img
            className="d-block w-40"
            src="cover.jpg"
            alt="First slide"
            style={{height:"300px",width:"100%"}} 
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-40"
            src="cover2.jpg"
            alt="Second slide"
            style={{height:"300px",width:"100%"}} 
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-40"
            src="cover3.jpg"
            alt="Third slide"
            style={{height:"300px",width:"100%"}} 
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      </Row>
    </div>
  );
}

export default SilderImage;
