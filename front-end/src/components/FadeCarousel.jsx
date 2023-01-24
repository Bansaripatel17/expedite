import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
        style={{height:"40em"}}

          className="d-block w-100"
          src="../assets/img/carousel/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"40em"}}
          className="d-block w-100"
          src="../assets/img/carousel/carousel2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"40em"}}
          className="d-block w-100"
          src="../assets/img/carousel/carousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;