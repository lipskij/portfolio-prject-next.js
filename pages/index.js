import React from "react";
import Head from "next/head";
import Nav from "../component/Nav";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Link from "next/link";
import ToggleTheme from "../component/ToggleTheme";
import Logo from "../component/Logo";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.home}>
        <div className='toggle'>
          <ToggleTheme />
        </div>
        <Logo />

        <div className={styles.text}>
          <p>This page is for my portfolio.</p>
          <p>It is made using React and Nextjs.</p>
          <p>Every page has a switch to turn from light mode to dark.</p>
          <p>I'll be ading a text that user can unfold to read more.</p>
          <p>In the About page there will be a gallery.</p>
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
  );
};

export default Home;
