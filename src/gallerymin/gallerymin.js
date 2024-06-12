import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import './gallerymin.css'
const Gallerymin = () => {
    return (
      <div className="gallery">
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
      </div>
    );
  };
  
  export default Gallerymin;