import "./Heder.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand href="/home">Book Myshow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "50%" }}
              />
              <Button variant="outline-success">SignIn</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="nav-sub-bar">
        <Row>
          <Col></Col>
          <Col>
            <Row>
              <Col>
                <a href="/allmovies" className="nav-sub-bar-text" style={{color:"white"}}>
                  MOVIE
                </a>{" "}
              </Col>
              <Col>
                <a href="#" className="nav-sub-bar-text" style={{color:"white"}}>
                  EVENT
                </a>{" "}
              </Col>
              <Col>
                <a href="#" className="nav-sub-bar-text" style={{color:"white"}}>
                  SPORTS
                </a>{" "}
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col>
                <a href="#" className="nav-sub-bar-text" style={{color:"white"}}>
                  OFFERS
                </a>{" "}
              </Col>
              <Col>
                <a href="#" className="nav-sub-bar-text" style={{color:"white"}}>
                  CONTACT US
                </a>{" "}
              </Col>
              <Col>
                <a href="/user-register" className="nav-sub-bar-text" style={{color:"white"}}>
                  Registraion
                </a>{" "}
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
