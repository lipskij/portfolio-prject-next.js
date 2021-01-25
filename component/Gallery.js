import React, { useState } from 'react';
import { ImArrowRight, ImArrowLeft } from 'react-icons/im';
import Image from 'next/image';
import { ImageData } from './ImageData';

// make scrooling gallery (done)
// with apearing images on scrool (done)
// gallery that uses grid (done)
// mobile layout gallery to open/enlarge images
// describe what was used like nextjs Image,what it does,like optimization
// what other third party libraries was used, maybe framer motion
// added react icons for arrows (done)

const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.lenth <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="buttons">
        <ImArrowLeft className="btn-prev" onClick={prevSlide} size={30}/>
        <ImArrowRight className="btn-next" onClick={nextSlide} size={30}/>
      </div>
      {ImageData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image
                className="image"
                src={slide.imageUrl}
                key={index}
                alt="bikes"
                width={500}
                height={300}
              />
            )}
          </div>
        );
      })}
      {/* <div className="buttons"></div> */}
    </section>
  );
};

export default Gallery;
