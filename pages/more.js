import React from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const More = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Front End App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className={styles.main}>
          <h1>This is More page</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default More;
