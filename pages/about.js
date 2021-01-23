import React, { useState } from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Gallery from '../component/Gallery';
import GalleryTwo from '../component/GalleryTwo';
import { ImageData } from '../component/ImageData';

// add responsivnes for gallery
// button to indicate switching between sliding gallery and and grid
// use fetch and/or lazy loading

const About = () => {
  const [gallery, setGallery] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Front End App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className={styles.main}>
          <h1>This is About page</h1>
          <p>A small gallery of pictures made with CSS grid</p>
          {gallery ? (
            <div>
              <Gallery slides={ImageData} />
              <button className="change-gal" onClick={() => setGallery(false)}>
                Big
              </button>
            </div>
          ) : (
            <div>
              <GalleryTwo />
              <button className="change-gal" onClick={() => setGallery(true)}>
                Small
              </button>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
