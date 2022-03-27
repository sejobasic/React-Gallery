import "./styles.css";
import React, { useState } from "react"
import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"

const images = [img1, img2, img3, img4, img5, img6];

function Loading({ calculatedWidth }) {
  return (
  <aside>
    <div className='loading-bar'>
      <label htmlFor='images-loaded'>Loading images...</label>
      <progress 
        id='images-loaded' 
        max='100' 
        value={calculatedWidth}>
      </progress>
    </div>
  </aside>
  )
}


function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  function handleClick() {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    })
  }

  function handleImageLoad() {
    setNumLoaded((numLoaded) => numLoaded + 1);
  }


  return (
    <section>
      <header>
        <h1>PLACES</h1>
        <h2>
          Photography captured <br /> by Sejo Basic
        </h2>
      </header>

      <figure className="image-container">
        {numLoaded < images.length && ( 
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((image, index) => (
          <img
            key={image} 
            src={image} 
            alt="photography" 
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? 'display' : 'hide'}
          />
        ))}
      </figure>
    </section>
  );
}
export default App