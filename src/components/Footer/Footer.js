
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'


function Footer() {
  return (
    <div style={{marginBottom:"10px" ,backgroundColor:"black" }}>
     <Row style={{backgroundColor:"black" ,padding:"20px", marginBottom:"10px"}} >
        
        <Col>
            <h6  style={{color:"white"}} >CUSTOMER CARE</h6>
          
        </Col>
        <Col> 
        <h6  style={{color:"white"}} > RESEND BOOKING CONFIRMATION</h6>
        
        </Col>

        <Col>
        <Button variant="outline-success" style={{width:"150px", height:"40px"}}>Contact Tody</Button>
        </Col>
     </Row>

     <Row style={{backgroundColor:"gray" ,padding:"20px", marginBottom:"10px"}}>
        <Col>
        <h6>Top and Popular Trending Theatres</h6>
            <p>MOVIES BY GENRE
               Best Action Movies | Best Romantic Movies |<br/>
               Best Comedy Movies | Best Adventure Movies |<br/>
               Best Biography Movies | Best Crime Movies |<br/>
               Best Drama Movies | Best Family Movies |<br/>
               Best Fantasy Movies | Best History Movies |<br/>
               Best Musical Movies | Best Mystery Movies | <br/>
               Best Sci-Fi Movies | Best Thriller Movies |</p>
        </Col>
        <Col>
        <h6>POPULAR MOVIES BY LANGUAGE</h6>
        <p>Latest Sinhala Movies | Latest Hindi Movies |<br/>
          Latest Tamil Movies | Latest English Movies | <br/></p>
        </Col>
        
        

        <Col>
        <h6>Top and Popular Trending Theatres</h6>
        <p>MOVIE TRAILER VIDEOS<br/>
        Upcoming Movie Trailers | Now Showing Movie Trailers |<br/>
        Movie Ticket Offers | BookMyShow Sri Lanka Support | <br/>
        Popular Celebrities |
                </p>
        </Col>

        
     </Row>
    </div>
  );
}

export default Footer;
