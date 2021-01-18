import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../component/Footer';
import Link from 'next/link';
import ToggleTheme from '../component/ToggleTheme';
import Gallery from '../component/Gallery';
import { ImageData } from '../component/ImageData';

const Single = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="single-nav">
        <ul className="single-ul">
          <p className="logo">{`< generic logo />`}</p>
          <li>
            <a data-page="home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a data-page="about" href="#about">
              About
            </a>
          </li>
          <li>
            <a data-page="more" href="#more">
              More
            </a>
          </li>
        </ul>
        <div className="toggle">
          <ToggleTheme />
        </div>
      </nav>
      <main className={styles.main}>
        <a name="home"></a>
        <section className={styles.section}>
          <h1>This is Home page</h1>
          <div className="home-txt">
            <p>This page is for my portfolio</p>
            <p>It is made using React and Nextjs</p>
            <p>Every page has a switch to turn from light mode to dark</p>
            <p>I'll be ading a text that user can unfold to read more</p>
            <p>In the About page there will be a gallery</p>
            <p>
              User can switch to multi page mode{' '}
              <Link href="/">
                <a className={styles.single}>Here</a>
              </Link>
            </p>
          </div>
        </section>
        <a name="about"></a>
        <section className={styles.section}>
          <h1>This is About page.</h1>
          <p>A small gallery of pictures made with CSS grid</p>
          <Gallery slides={ImageData} />
        </section>
        <a name="more"></a>
        <section className={styles.section}>
          <h1>This is More page</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Single;
