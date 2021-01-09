import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../component/Nav';
import styles from '../styles/Home.module.css';
import Footer from '../component/Footer';

// add dark mode without flickering
// add simgle page mode/option to the multi page
// read more option to expand and see more text

const Home = () => {
  // const [dark, setDark] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>This is Home page</h1>
        {/* <button onClick={() => setDark(!dark)}>
          {dark ? 'dark' : 'light'}
        </button> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
