import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from './images/logo.png';

import { IoSearch } from "react-icons/io5";

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

import './nav.css';
const Main=()=>
{
 return(
  <>
   
     <Navbar expand="lg" className="Navbar" sticky="top" data-bs-theme="light" >
      <Container className="contain">
        <Navbar.Brand href="#"><img src={logo} width={200} height={70}>
        </img>
        </Navbar.Brand>
        
                <Navbar.Toggle className="toggle-bg-primary" aria-controls="navbarScroll"  />

        <Navbar.Collapse id="navbarScroll" >
          <Nav className="me-auto ">
            
            <Nav.Link href="#home"className="custom-link" >Home</Nav.Link>
             <Nav.Link href="#tv shows" className="custom-link">Tv Shows</Nav.Link>
             <Nav.Link href="#Movies" className="custom-link">Movies</Nav.Link>
             <Nav.Link href="#anime" className="custom-link">Anime</Nav.Link>
             <Nav.Link href="#recently added" className="custom-link">Recently Added</Nav.Link>
             <Nav.Link href="#web series" className="custom-link">Web Series</Nav.Link>

             
            
             
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   

  </>
 )
}

export default Main;