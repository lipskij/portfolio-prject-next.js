import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import ImageData from "../component/ImageData";

const About = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <h1>Gallery</h1>
        <div>
          <ImageData />
        </div>
      </main>
      <div id='image-modal'></div>
      <Footer />
    </div>
  );
};

export default About;
