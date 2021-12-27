import React from "react";
import Head from "next/head";
import Nav from "../component/Nav";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Link from "next/link";
import ToggleTheme from "../component/ToggleTheme";
import Logo from "../component/Logo";
import InitialTransition from "../component/InitialTransition";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='preload' rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Nextjs front end project for page transitions'
        />
        <title>Front End App</title>
      </Head>
      <Nav />
      <InitialTransition />
      <main className={styles.home}>
        <div className='toggle'>
          <ToggleTheme />
        </div>
        <Logo />
        <div className={styles.text}>
          <h1>Brightest ideas for YOUR Brand!</h1>
          <div className='button-space'>
            <button className='home-btn'>
              <Link rel='preload' href='/more'>
                <a>Contact Us!</a>
              </Link>
            </button>
          </div>
          <p>This page is for my portfolio.</p>
          <p>It is made using React and Nextjs and Framer Motion.</p>
          <p>I'll be ading a text that user can unfold to read more.</p>
          <p>Possibility to toggle between light and dark mode</p>
          <p>
            User can switch to single page{" "}
            <Link rel='preload' href='/single'>
              <a className={styles.single}>Mode</a>
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
