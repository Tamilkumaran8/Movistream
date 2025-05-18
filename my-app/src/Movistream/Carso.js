import {useState} from "react";

import marvel from './images/marvel.jpg';
import nun from './images/nun.jpg';
import Carousel from 'react-bootstrap/Carousel';

import './carousel.css'
const Sample=()=>{
     const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
return(
    <> <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="main_slice">
        
        
            
               
        
        <Carousel.Caption>
          
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='banner'>
      <img src="https://wallpaperaccess.com/full/2703652.png"></img>
                <h1 className='description'>
                    
                    </h1>
       
            </div>
        <div className="fade_bottom"></div><br></br>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='banner'>
        <img src="https://wallpaperaccess.com/full/2703652.png"></img>
                <h1 className='description'>
                    
                    </h1>
       
            </div>
        <div className="fade_bottom"></div><br></br>
        <Carousel.Caption>
          
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
        
     
    </>
)


}
export default Sample;