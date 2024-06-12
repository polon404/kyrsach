import './gallary.css'
import img from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
import { useState } from 'react';
const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % 3);
  };

  return (
    <div className="gallery">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src={img} alt="Image 1" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src={img2} alt="Image 2" />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src={img3} alt="Image 3" />
        </div>
      </div>
      <button className="carousel-prev" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="carousel-next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Gallery;