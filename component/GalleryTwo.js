import React from 'react';
import { FetchData } from './ImageData';

// SameSite='Lax' some sort of cookie thing

const GalleryTwo = () => {
  return (
    <section className="gal-two">
      {FetchData.map((img) => {
        console.log(img.url);
        return (
          <div key={img.url}>
            <img className="fetch-img" src={img.url} key={img.url} width={300} height={300}/>
          </div>
        );
      })}
    </section>
  );
};

export default GalleryTwo;
