import "./CardSilider.css";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { height } from "dom-helpers";

function CardSilider() {
  return (
    <div>
      <Row className="slide-main-row" style={{ margin: "auto", width: "98%" }}>
        <h5 className="header-Text">The Best Entertaiment</h5>
        <Col style={{ margin: "10px" }}>
          <Carousel indicators={false}>
            <Carousel.Item interval={2}>
              <CardGroup style={{gap:"10px"}}>
                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book1.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book2.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book3.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book4.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

              </CardGroup>

            </Carousel.Item>

         
             <Carousel.Item>
              <CardGroup style={{gap:"10px"}}>
                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book5.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book6.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book7.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

                <Card style={{ borderRadius: "50px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src="book8.jpg"
                    className="Card-imag"
                    style={{ borderRadius: "20px", height: "100%" }}
                  />
                </Card>

              </CardGroup>
            </Carousel.Item> 
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default CardSilider;
