import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../component/Nav';
import styles from '../styles/Home.module.css';
import Footer from '../component/Footer';

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
