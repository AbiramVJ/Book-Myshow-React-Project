import "./primier.css";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { height } from "dom-helpers";
import Badge from 'react-bootstrap/Badge'
import Button from "react-bootstrap/Button";

function Primier() {
  return (
    <div style={{padding: "10px"}}>
        
      <Row lassName="slide-main-row"style={{margin: "10px", width: "98%",backgroundColor: "#eeeee4",padding: "10px"}}>
      <Row>
          
        <Col md={10}><h4>Premieres</h4></Col>
        <Col></Col>

          <Col style={{alignContent:"end"}}><Button variant="danger">see All</Button></Col>
        </Row>

        <Col style={{ margin: "10px" }}>
          <Carousel indicators={false}>
            <Carousel.Item >
              <CardGroup style={{gap:"10px"}}>
                <Card style={{ backgroundColor:"white" ,borderRadius:"10px" }} >
                <Card.Img variant="top" src="book9.jpg" className="Card-imag" style={{ borderRadius:"10px"  ,height:"400px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card >
                <Card style={{ backgroundColor:"white" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book10.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"white" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book11.jpg" className="Card-imag" style={{ height:"400px", borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>


                <Card style={{ backgroundColor:"book12" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book12.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card>
              </CardGroup  >
            </Carousel.Item>

            <Carousel.Item >
            <CardGroup style={{gap:"10px"}} >
                <Card style={{ backgroundColor:"white" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book13.jpg" className="Card-imag" style={{height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"white" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book14.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"white" ,borderRadius:"10px" }}> 
                <Card.Img variant="top" src="book15.jpg" className="Card-imag" style={{height:"400px", borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card >
                <Card style={{ backgroundColor:"white" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book16.jpg" className="Card-imag" style={{ height:"400px"  ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card>
              </CardGroup>
            </Carousel.Item>
            
          </Carousel>
        </Col>
      </Row>
{/* Secound row */}
      <Row lassName="slide-main-row"style={{margin: "10px", width: "98%",backgroundColor: "White",padding: "10px"}}>
      <Row>
          
        <Col md={10} ><h4>Online Streaming Events</h4></Col>
        <Col></Col>

        <Col style={{alignContent:"end"}}><Button variant="danger">see All</Button></Col>
        </Row>

        <Col style={{ margin: "10px" }}>
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardGroup style={{gap:"10px"}}>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }} >
                <Card.Img variant="top" src="book17.jpg" className="Card-imag" style={{ borderRadius:"10px"  ,height:"400px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card >
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book18.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book19.jpg" className="Card-imag" style={{ height:"400px", borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>


                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book20.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card>
              </CardGroup  >
            </Carousel.Item>

            <Carousel.Item interval={500}>
            <CardGroup style={{gap:"10px"}}>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book21.jpg" className="Card-imag" style={{height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book22.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}> 
                <Card.Img variant="top" src="book23.jpg" className="Card-imag" style={{height:"400px", borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card >
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book24.jpg" className="Card-imag" style={{ height:"400px"  ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card>
              </CardGroup>
            </Carousel.Item>
            
          </Carousel>
        </Col>
      </Row>

      {/* Third row */}
      <Row lassName="slide-main-row"style={{margin: "10px", width: "98%",backgroundColor: "white",padding: "10px"}}>
      <Row>
          
        <Col  md={10}><h4>Outdoor Event <Badge bg="danger">New</Badge></h4> </Col>
        <Col></Col>
        <Col style={{alignContent:"end"}}><Button variant="danger">see All</Button></Col>
        </Row>

        <Col style={{ margin: "10px" }}>
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardGroup style={{gap:"10px"}}>
                
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book25.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book26.jpg" className="Card-imag" style={{ height:"400px", borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>


                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book27.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card>

                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book2.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card>


              </CardGroup  >
            </Carousel.Item>

            <Carousel.Item interval={500}>
            <CardGroup style={{gap:"10px"}}>
                
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book28.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}> 
                <Card.Img variant="top" src="book29.jpg" className="Card-imag" style={{height:"400px", borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card >
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book30.jpg" className="Card-imag" style={{ height:"400px"  ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book5.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Carousel.Item>
            
          </Carousel>
        </Col>
      </Row>

      {/* Fourth row */}
      <Row lassName="slide-main-row"style={{margin: "10px", width: "98%",backgroundColor: "white",padding: "10px"}}>
      <Row>
          
        <Col md={10}><h4>Top Game And Sports Event</h4></Col>
        <Col></Col>

        <Col style={{alignContent:"end"}}><Button variant="danger">see All</Button></Col>
        </Row>

        <Col style={{ margin: "10px" }}>
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardGroup style={{gap:"10px"}}>
                
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book31.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book32.jpg" className="Card-imag" style={{ height:"400px", borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book33.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book34.jpg" className="Card-imag" style={{ height:"400px", borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>


                
              </CardGroup  >
            </Carousel.Item>

            <Carousel.Item interval={500}>
            <CardGroup style={{gap:"10px"}}>
                

                
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book37.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book38.jpg" className="Card-imag" style={{ height:"400px", borderRadius:"10px" }}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}>
                <Card.Img variant="top" src="book39.jpg" className="Card-imag" style={{ height:"400px" ,borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card style={{ backgroundColor:"Black" ,borderRadius:"10px" }}> 
                <Card.Img variant="top" src="book40.jpg" className="Card-imag" style={{height:"400px", borderRadius:"10px"}}  />
                  
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                
                </Card >
                
              </CardGroup>
            </Carousel.Item>
            
          </Carousel>
        </Col>
      </Row>
      {/* top of footer */}

      <Row style={{ backgroundColor:"#eeeee4",margin:"10px" ,padding:"10px"}}>
           
              <Col>
              <h5>Privacy Note</h5>
              <p>
              By using www.bookmyshow.com(our website), you are fully accepting the Privacy Policy available at https://lk.bookmyshow.com/privacy governing your access to BookMyShow and provision of services by BookMyShow to you. If you<br/>
              do not accept terms mentioned in the Privacy Policy, you must not share any of your personal information and immediately exit BookMyShow.
              </p>
              </Col>
            
        </Row>
    </div>
  );
}

export default Primier;
