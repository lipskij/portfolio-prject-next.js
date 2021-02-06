import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImFacebook2 } from "react-icons/im";

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
          <div className={styles.text}>
            <p className="more-txt">
              To find more projects that i did{" "}
              <FaGithubAlt
                className="git-logo"
                size={30}
                href="https://github.com/lipskij"
              />
            </p>
            <p className="more-txt">
              Write me an email
              <HiOutlineMail
                className="mail-logo"
                size={30}
                href="mailto:emil.lipskij@gmail.com"
              />
            </p>
            <p className="more-txt">
              Or contact me on
              <ImFacebook2
                className="fb-logo"
                size={25}
                href="https://facebook.com/"
              />
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default More;
