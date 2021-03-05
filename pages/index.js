import React from "react";
import Head from "next/head";
import Nav from "../component/Nav";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Link from "next/link";
import ToggleTheme from "../component/ToggleTheme";
import Logo from "../component/Logo";
import InitialTransition from "../component/Welcome";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Front End App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <InitialTransition />
        <Nav />
        <main className={styles.home}>
          <div className='toggle'>
            <ToggleTheme />
          </div>
          <Logo />
          <div className={styles.text}>
            <h1>Brightest ideas for YOUR Brand!</h1>
            <p>This page is for my portfolio.</p>
            <p>It is made using React and Nextjs and Framer Motion.</p>
            <p>I'll be ading a text that user can unfold to read more.</p>
            <p>Possibility to toggle between light and dark mode</p>
            <p>
              User can switch to single page mode{" "}
              <Link href='/single'>
                <a className={styles.single}>Here</a>
              </Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
