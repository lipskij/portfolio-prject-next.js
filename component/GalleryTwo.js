import React, { useState } from "react";
import { FetchData } from "./ImageData";

// SameSite='Lax' some sort of cookie thing
// onClick function to inlarge image
// on click logs all images

const GalleryTwo = () => {

  return (
    <section className="gal-two">
      {FetchData.map((img) => {
        return (
          <div key={img.url}>
              <img className="fetch-img" src={img.url} key={img.url} />
          </div>
        );
      })}
    </section>
  );
};

export default GalleryTwo;
