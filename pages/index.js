import React from 'react';
import Head from 'next/head';
import Nav from '../component/Nav';
import styles from '../styles/Home.module.css';
import Footer from '../component/Footer';

// add dark mode without flickering (done)
// add simgle page mode/option to the multi page
// read more option to expand and see more text
// has flickering in nav when navigaiting (when putting it out of nav flickering stops, idk)

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>This is Home page</h1>
        <div className="home-txt">
          <p>This page is for my portfolio</p>
          <p>It is made using React and Nextjs</p>
          <p>Every page has a switch to turn from light mode to dark</p>
          <p>I'll be ading a text that user can unfold to read more</p>
          <p>In the About page there will be a gallery</p>
          <p>User can switch to single page mode</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
