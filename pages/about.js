import React from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Front End App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Nav />
        <main className={styles.main}>
          <h1>This is About page.</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
