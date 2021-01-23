import React, { useState } from 'react';
import { FetchData } from './ImageData';

// SameSite='Lax' some sort of cookie thing
// onClick function to inlarge image

const GalleryTwo = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="gal-two">
      {FetchData.map((img) => {
        console.log(img.url);
        return (
          <div key={img.url}>
            <button className="img-btn">
              <img className="fetch-img" src={img.url} key={img.url} />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default GalleryTwo;
