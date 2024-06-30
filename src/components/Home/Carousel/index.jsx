import Carousel from 'react-bootstrap/Carousel';

import './Carousel.css';

export default function CarouselComponent() {
  return (
    <div className='carousel-container'>
      <Carousel> 
          <Carousel.Item interval={10000}> 
            <img src='carousels/image1.jpg' alt='Image One' />
          </Carousel.Item> 
          <Carousel.Item interval={10000}> 
            <img src='carousels/image2.jpg' alt='Image Two' />
          </Carousel.Item> 
        </Carousel>
    </div>
  );
}