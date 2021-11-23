import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { contains } from "dom-helpers";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
//import data from "./Movies.json";

import { useEffect, useState } from "react";
import axios from "axios";
 


function SingleMovieFetch() {

    const {movie} = useParams();
    console.log(movie);

    const [Singledata, setSingleData] = useState([]);

    useEffect( async()=>{
        try {
            const response = await axios.get(`https://bmsbackendabi.herokuapp.com/allmovies/singlemovie/${movie}`);
             
            setSingleData([response.data]);
            console.log([response.data]);


          } catch (error) {
            console.error(error);
          }

    },[]);

  return (
    
    <div>
      <Container fluid style={{ padding: "8%", backgroundColor: "#eeeee4" }}>
        <Row>
            {Singledata.map((movie) =>{  
                return(                            
                <Col  id={movie._id} key={movie._id} xs={4} md={6} lg={3} style={{ marginBottom: "2%" }}>
                    <Card >
                    <Card.Img variant="top" src={movie.image} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.actor}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                )
                  
                  })}
        </Row>
      </Container>
    </div>
  );
}

export default SingleMovieFetch;
