import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel(path) {
  const [index, setIndex] = useState(0);
console.log('path',path.path);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
var path2=path.path;
console.log(typeof(path2));
path2= path2.slice(0,-4);
path2=path2.concat('','2.jpg');
// path2.concat('','2.jpg')
console.log('path2',path2);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={path.path}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${path2}`}
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
  );
}

// render(<ControlledCarousel />);