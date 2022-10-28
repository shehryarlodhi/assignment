import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";



const Navbars = ()=>
{
    return(
    
        
        <div className="Navbar">

<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Fashion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  >Place Order</Nav.Link>
            <Nav.Link >Cancel Order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    );
}

export default Navbars;