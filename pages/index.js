import React from "react";
import Head from "next/head";
import Nav from "../component/Nav";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Link from "next/link";
import ToggleTheme from "../component/ToggleTheme";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.home}>
        <div className="toggle">
          <ToggleTheme />
        </div>
        <h1>Best brand!</h1>
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
          <svg className='image-svg' width='400' height='400'>
            <rect
              x='0'
              y='0'
              width='400'
              height='400'
              stroke='violet'
              fill='transparent'
              stroke-width='5'
            />
            <p>lol</p>
          </svg>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
