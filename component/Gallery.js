import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

// make scrooling gallery
// gallery that uses grid
// with apearing images on scrool
// mobile layout gallery to open/enlarge images

const photos = [
  {
    imageUrl: '/bike-img1.jpg',
  },
  {
    imageUrl: '/bike-img2.jpg',
  },
  {
    imageUrl: '/bike-img3.jpg',
  },
  {
    imageUrl: '/bike-img4.jpg',
  },
];

const Gallery = () => {
  return (
    <div className={styles.main}>
      {photos.map(({ imageUrl }) => {
        return <Image src={imageUrl} key={imageUrl} alt="bike" width={500} height={300}/>;
      })}
    </div>
  );
};

export default Gallery;
