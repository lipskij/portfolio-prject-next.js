import React, { useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import SliderImageData from './SliderImageData';
import styles from '../styles/gallery.module.css';

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
    <section className={styles.slider}>
      <div className={styles.buttons}>
        <BiLeftArrow className={styles.btnPrev} onClick={prevSlide} size={30}/>
        <BiRightArrow className={styles.btnNext} onClick={nextSlide} size={30}/>
      </div>
      {SliderImageData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image
                className={styles.image}
                src={slide.imageUrl}
                key={index}
                alt="bikes"
                width={800}
                height={500}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
