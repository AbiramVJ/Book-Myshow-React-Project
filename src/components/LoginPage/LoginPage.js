import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


function LoginPage() {

    const [username, setUsername]=useState("");
    const [emailadress, setEmailAdress]=useState("");
    const [password, setPassword]=useState("");
    // console.log(emailadress);
    // console.log(password);
    async function UserPost() {
        const userDetail={
            "username":username,
           "email":emailadress,
           "password":password
        }
        console.log(userDetail);

        const respons = await axios.post("https://bmsbackendabi.herokuapp.com/user-register", userDetail)
        Swal.fire({
          title: '<strong>Submited</strong>',
          icon: 'success',
         
          showCloseButton: true,
          
        })

    }

  return (
    <div>
      <Row style={{margin:"10px"}}>
        <Col>
          <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control  value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder="Enter User name" />
              
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control  value={emailadress} onChange={(e)=>setEmailAdress(e.target.value)}   type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={UserPost}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
