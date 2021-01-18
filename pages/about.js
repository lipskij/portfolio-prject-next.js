import React from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Gallery from '../component/Gallery';
import { ImageData } from '../component/ImageData';

const About = () => {
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
          <Gallery slides={ImageData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
