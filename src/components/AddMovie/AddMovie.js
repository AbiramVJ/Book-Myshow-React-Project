import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Swal from "sweetalert2";
import { Col, Row } from "react-bootstrap";

function AddMovie() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageurl, setImageurl]=useState("");
  const [title, setTitle]=useState("");
  const [actorName, setActorName]=useState("");

  async function MoviePost(){
    const movieDetail={
                 "image":imageurl,
               "title":title,
                "actor":actorName
            }
            console.log(movieDetail);
            await axios.post("http://localhost:3001/allmovie/add-book", movieDetail)
            Swal.fire({
            title: '<strong>Submited</strong>',
            icon: 'success',
         
          showCloseButton: true,
          
        })

  } 

//   async function UserPost() {
//     const movieDetail={
//         "image":imageurl,
//        "title":title,
//        "actor":actorName
//     }
//     console.log(movieDetail);

  
  return (
      <Row>
          <Col sm={10}> </Col>
          <Col style={{margin:"10px", alignContent:"center"}}>
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD YOUR MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Image Url</Form.Label>
              <Form.Control value={imageurl} onChange={(e)=>setImageurl(e.target.value)}  type="text" placeholder="Image Url" />     
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" />     
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Actor</Form.Label>
              <Form.Control value={actorName} onChange={(e)=>setActorName(e.target.value)}  type="text" placeholder="Actor name" />     
            </Form.Group>
        
            <Button variant="primary" type="submit" onClick={MoviePost}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
    </Col>
    </Row>
  );
}

export default AddMovie;
