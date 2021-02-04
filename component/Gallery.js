import React, { useState } from 'react';
import { ImArrowRight, ImArrowLeft } from 'react-icons/im';
import Image from 'next/image';
import SliderImageData from './SliderImageData';

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
      {SliderImageData.map((slide, index) => {
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
    </section>
  );
};

export default Gallery;
