import React, { useState } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import { changeGal } from "../styles/gallery.module.css";
import Head from "next/head";
import Gallery from "../component/Gallery";
import SliderImageData from "../component/SliderImageData";
import ImageData from "../component/ImageData";
import PageTransition from "../component/GalleryTransition";

const About = () => {
  const [gallery, setGallery] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <PageTransition />
      <main className={styles.main}>
        <h1>This is Gallery</h1>
        <p>
          Small gallery {" "}
          {gallery ? "slider" : "CSS grid"}
        </p>
        {gallery ? (
          <div>
            <button className={changeGal} onClick={() => setGallery(false)}>
              Grid
            </button>
            <Gallery slides={SliderImageData} />
          </div>
        ) : (
          <div>
            <button className={changeGal} onClick={() => setGallery(true)}>
              Slider
            </button>
            <ImageData />
          </div>
        )}
      </main>
      <div id='image-modal'></div>
      <Footer />
    </div>
  );
};

export default About;
