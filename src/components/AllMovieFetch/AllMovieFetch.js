import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { contains } from "dom-helpers";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import data from "./components/AllMovies/Movies";
import axios from "axios";
import { useEffect, useState } from "react";





function AllMoviesFetch() {

    const [data, setData]=useState([]);

    useEffect( async()=>{
        try {
            const response = await axios.get('http://localhost:3001/allmovies');
            // console.log(response);
            setData(response.data)

          } catch (error) {
            // console.error(error);
          }

    },[]);

   
    
  return (
    
    <div>
      <Container fluid style={{ padding: "8%", backgroundColor: "#eeeee4" }}>
        <Row>
            {data.map((mov) =>{

            return(
            
                <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                    
                    <Card style={{cursor:"pointer"}}  onClick={()=>window.location.href="/allmovies/singlemovie/"+mov._id}>
                    <Card.Img variant="top" src={mov.image} />
                    <Card.Body>
                        <Card.Title>{mov.title}</Card.Title>
                        <Card.Text>{mov.actor}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            )
            }
            )}
        </Row>
      </Container>
    </div>
  );
}

export default AllMoviesFetch;
