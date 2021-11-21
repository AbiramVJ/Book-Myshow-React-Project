import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { contains } from "dom-helpers";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import data from "./Movies.json";




function AllMovies() {
    
  return (
    
    <div>
      <Container fluid style={{ padding: "8%", backgroundColor: "#eeeee4" }}>
        <Row>
            {data.map((mov) =>
                <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                    <Card style={{cursor:"pointer"}}  onClick={()=>window.location.href="/allmovies/"+mov.id}>
                    <Card.Img variant="top" src={mov.image} />
                    <Card.Body>
                        <Card.Title>{mov.title}</Card.Title>
                        <Card.Text>{mov.actor}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
      </Container>
    </div>
  );
}

export default AllMovies;
