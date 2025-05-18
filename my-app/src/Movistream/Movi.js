import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './Getstart.css';

import Main from "./nav";
import Home from "./cards";
import Carso from "./Carso";
import End from "./footer";


const Getstart=()=>{

  return(
    <>
       
   
   
   <Main/>  
   <Carso/>
   <Home/>
  
<End/>
    </>
  )
}
export default Getstart;

function App(){
  return(
    <>
   
   
   <Main/>
   <Carso/>
   <Home/>
   <End/>
  
    </>
  )
}




