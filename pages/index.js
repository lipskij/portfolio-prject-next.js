import React from "react";
import Head from "next/head";
import Nav from "../component/Nav";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Link from "next/link";
import ToggleTheme from "../component/ToggleTheme";
import { motion } from "framer-motion";

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
        <div className='image-svg'>
          <motion.svg
            width='300'
            height='301'
            viewBox='0 0 300 301'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.line
              y1='0.5'
              x2='0'
              y2='0.5'
              x1='0'
              stroke='violet'
              animate={{ x1: 300 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.line
              y1='300.5'
              x2='0'
              y2='300.5'
              x1='0'
              stroke='violet'
              animate={{ x1: 300 }}
              transition={{ duration: 1 }}
            />
            <motion.line
              x1='0.5'
              y1='301'
              x2='0.5'
              y2='300'
              stroke='violet'
              animate={{ y2: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.line
              x1='299.5'
              y1='300'
              x2='299.5'
              y2='300'
              stroke='violet'
              animate={{ y2: 0 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.svg>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
