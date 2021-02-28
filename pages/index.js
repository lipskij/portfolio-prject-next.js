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
            <motion.path
              d='M30.2852 51V25.4062H39.25C42.3555 25.4062 44.7109 26.0039 46.3164 27.1992C47.9219 28.3828 48.7246 30.123 48.7246 32.4199C48.7246 33.6738 48.4023 34.7812 47.7578 35.7422C47.1133 36.6914 46.2168 37.3887 45.0684 37.834C46.3809 38.1621 47.4121 38.8242 48.1621 39.8203C48.9238 40.8164 49.3047 42.0352 49.3047 43.4766C49.3047 45.9375 48.5195 47.8008 46.9492 49.0664C45.3789 50.332 43.1406 50.9766 40.2344 51H30.2852ZM35.5586 39.8555V46.7637H40.0762C41.3184 46.7637 42.2852 46.4707 42.9766 45.8848C43.6797 45.2871 44.0312 44.4668 44.0312 43.4238C44.0312 41.0801 42.8184 39.8906 40.3926 39.8555H35.5586ZM35.5586 36.1289H39.4609C42.1211 36.082 43.4512 35.0215 43.4512 32.9473C43.4512 31.7871 43.1113 30.9551 42.4316 30.4512C41.7637 29.9355 40.7031 29.6777 39.25 29.6777H35.5586V36.1289Z'
              fill='#0fc'
              opacity={0}
              animate={{ rotateY: 360, opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            />
            <motion.path
              d='M90.7598 93.6309H86.5586V103H81.2852V77.4062H90.7949C93.8184 77.4062 96.1504 78.0801 97.791 79.4277C99.4316 80.7754 100.252 82.6797 100.252 85.1406C100.252 86.8867 99.8711 88.3457 99.1094 89.5176C98.3594 90.6777 97.2168 91.6035 95.6816 92.2949L101.219 102.754V103H95.5586L90.7598 93.6309ZM86.5586 89.3594H90.8125C92.1367 89.3594 93.1621 89.0254 93.8887 88.3574C94.6152 87.6777 94.9785 86.7461 94.9785 85.5625C94.9785 84.3555 94.6328 83.4062 93.9414 82.7148C93.2617 82.0234 92.2129 81.6777 90.7949 81.6777H86.5586V89.3594Z'
              fill='#0fc'
              opacity={0}
              animate={{ rotateY: 360, opacity: 1 }}
              transition={{ duration: 1, delay: 2.3 }}
            />
            <motion.path
              d='M154.734 157.727H145.488L143.73 163H138.123L147.65 137.406H152.537L162.117 163H156.51L154.734 157.727ZM146.912 153.455H153.311L150.094 143.875L146.912 153.455Z'
              fill='#0fc'
              opacity={0}
              animate={{ rotateY: 360, opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
            />
            <motion.path
              d='M218.098 223H212.824L202.559 206.16V223H197.285V197.406H202.559L212.842 214.281V197.406H218.098V223Z'
              fill='#0fc'
              opacity={0}
              animate={{ rotateY: 360, opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            <motion.path
              d='M253.285 276V250.406H261.16C263.41 250.406 265.42 250.916 267.189 251.936C268.971 252.943 270.359 254.385 271.355 256.26C272.352 258.123 272.85 260.244 272.85 262.623V263.801C272.85 266.18 272.357 268.295 271.373 270.146C270.4 271.998 269.023 273.434 267.242 274.453C265.461 275.473 263.451 275.988 261.213 276H253.285ZM258.559 254.678V271.764H261.107C263.17 271.764 264.746 271.09 265.836 269.742C266.926 268.395 267.482 266.467 267.506 263.959V262.605C267.506 260.004 266.967 258.035 265.889 256.699C264.811 255.352 263.234 254.678 261.16 254.678H258.559Z'
              fill='#0fc'
              opacity={0}
              animate={{ rotateY: 360, opacity: 1 }}
              transition={{ duration: 1, delay: 2.6 }}
            />
            <motion.path
              d='M174 19.5517L175.996 25.4164L176.112 25.7553H176.47H182.863L177.711 29.3285L177.401 29.5434L177.523 29.9005L179.503 35.7187L174.285 32.0998L174 31.9022L173.715 32.0998L168.497 35.7187L170.477 29.9005L170.599 29.5434L170.289 29.3285L165.137 25.7553H171.53H171.888L172.004 25.4164L174 19.5517Z'
              stroke='#a88400'
              opacity={0}
              scale={0}

              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.6 }}
            />
            <motion.path
              d='M132 244.552L133.996 250.416L134.112 250.755H134.47H140.863L135.711 254.328L135.401 254.543L135.523 254.9L137.503 260.719L132.285 257.1L132 256.902L131.715 257.1L126.497 260.719L128.477 254.9L128.599 254.543L128.289 254.328L123.137 250.755H129.53H129.888L130.004 250.416L132 244.552Z'
              stroke='#a88400'
              opacity={0}
              scale={0}

              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
            />
            <motion.path
              d='M252 165.552L253.996 171.416L254.112 171.755H254.47H260.863L255.711 175.328L255.401 175.543L255.523 175.9L257.503 181.719L252.285 178.1L252 177.902L251.715 178.1L246.497 181.719L248.477 175.9L248.599 175.543L248.289 175.328L243.137 171.755H249.53H249.888L250.004 171.416L252 165.552Z'
              stroke='#a88400'
              opacity={0}
              scale={0}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.8}}
            />
            <motion.path
              d='M217 94.2361L220.988 106.511L221.213 107.202H221.939H234.846L224.404 114.788L223.816 115.215L224.041 115.906L228.029 128.18L217.588 120.594L217 120.167L216.412 120.594L205.971 128.18L209.959 115.906L210.184 115.215L209.596 114.788L199.154 107.202H212.061H212.787L213.012 106.511L217 94.2361Z'
              stroke='#a88400'
              stroke-width='2'
              opacity={0}
              scale={0}

              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
            />
            <motion.path
              d='M73 166.236L76.9883 178.511L77.2128 179.202H77.9393H90.8456L80.4042 186.788L79.8164 187.215L80.0409 187.906L84.0292 200.18L73.5878 192.594L73 192.167L72.4122 192.594L61.9708 200.18L65.9591 187.906L66.1836 187.215L65.5958 186.788L55.1544 179.202H68.0607H68.7872L69.0117 178.511L73 166.236Z'
              stroke='#a88400'
              stroke-width='2'
              opacity={0}
              scale={0}

              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.9 }}
            />
          </motion.svg>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

{
  /* <motion.svg
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
</motion.svg>; */
}
