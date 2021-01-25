import React, { useState } from 'react';
import { FetchData } from './ImageData';

// SameSite='Lax' some sort of cookie thing
// onClick function to inlarge image
// on click logs all images

const GalleryTwo = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="gal-two">
      {FetchData.map((img) => {
        console.log(img.url);
        return (
          <div key={img.url}>
            {active ? console.log('clicked') : console.log('inacive')}{' '}
            <button className="img-btn" onClick={() => setActive(true)}>
              <img className="fetch-img" src={img.url} key={img.url} />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default GalleryTwo;
