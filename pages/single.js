import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Link from "next/link";
import ToggleTheme from "../component/ToggleTheme";
import Gallery from "../component/Gallery";
import ImageData from "../component/ImageData";
import SliderImageData from "../component/SliderImageData";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";

const Single = () => {
  const [gallery, setGallery] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="single-nav">
        <ul className="single-ul">
          <p className="logo">{`< generic logo />`}</p>
          <li>
            <a data-page="home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a data-page="about" href="#about">
              Gallery
            </a>
          </li>
          <li>
            <a data-page="more" href="#more">
              More
            </a>
          </li>
        </ul>
        <div className="toggle">
          <ToggleTheme />
        </div>
      </nav>
      <main className={styles.main}>
        <a className={styles.separete} name="home"></a>
        <section className={styles.section}>
          <h1>This is Home page</h1>
          <div className={styles.text}>
            <p>This page is for my portfolio.</p>
            <p>It is made using React and Nextjs.</p>
            <p>Every page has a switch to turn from light mode to dark.</p>
            <p>I'll be ading a text that user can unfold to read more.</p>
            <p>In the About page there will be a gallery.</p>
            <p>
              User can switch to multi page mode{" "}
              <Link href="/">
                <a className={styles.single}>Here</a>
              </Link>
            </p>
          </div>
        </section>
        <a className={styles.separete} name="about"></a>
        <section className={styles.section}>
          <h1>This is Gallery page.</h1>
          <p>
            A small gallery of pictures made with{" "}
            {gallery ? "slider" : "CSS grid"}
          </p>
          {gallery ? (
            <div>
              <button className="change-gal" onClick={() => setGallery(false)}>
                Grid
              </button>
              <Gallery slides={SliderImageData} />
            </div>
          ) : (
            <div>
              <button className="change-gal" onClick={() => setGallery(true)}>
                Slider
              </button>
              <ImageData />
            </div>
          )}
        </section>
        <a className={styles.separete} name="more"></a>
        <section className={styles.section}>
          <h1>This is More page</h1>
          <div className={styles.text}>
            <p className="more-txt">
              To find more projects that i did{" "}
              <Link href="https://github.com/lipskij">
                <a target="_blank">
                  <FaGithubAlt className="git-logo" size={30} alt="logo" />
                </a>
              </Link>
            </p>
            <p className="more-txt">
              Write me an email
              <Link href="mailto:emil.lipskij@gmail.com">
                <a target="_blank">
                  <HiOutlineMail className="mail-logo" size={30} alt="logo" />
                </a>
              </Link>
            </p>
            <p className="more-txt">
              Or contact me on
              <Link href="https://www.linkedin.com/in/emil-lipskij-6920831b2">
                <a target="_blank">
                  <GrLinkedin className="fb-logo" size={25} alt="logo" />
                </a>
              </Link>
            </p>
          </div>
        </section>
      </main>
      <div id="image-modal"></div>
      <Footer />
    </div>
  );
};

export default Single;
