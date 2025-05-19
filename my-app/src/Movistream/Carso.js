import React from "react";

import marvel from './images/marvel.jpg';
import nun from './images/nun.jpg';
import Carousel from 'react-bootstrap/Carousel';

import './carousel.css'
const Sample=()=>{
     
return(
  <>
  <Carousel id="car">
        <Carousel.Item interval={4000}>
          <img src={marvel} alt="pic1" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={marvel} alt="pic2" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={marvel} alt="pic3" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={marvel} alt="pic4" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
      <br></br>
  </>
)


}
export default Sample;