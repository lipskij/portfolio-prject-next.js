import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Gallery from "../component/Gallery";
import SliderImageData from "../component/SliderImageData";
import ImageData from "../component/ImageData";

const About = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Gallery</h1>
        <div>
          <p>some stuff</p>
        </div>
        <div>
          <ImageData />
        </div>
        <div>
          <Gallery slides={SliderImageData} />
        </div>
      </main>
      <div id='image-modal'></div>
      <Footer />
    </div>
  );
};

export default About;
