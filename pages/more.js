import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";

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
              <Link href="https://github.com/lipskij" target="_blank">
                <a>
                  <FaGithubAlt className="git-logo" size={30} alt="logo" />
                </a>
              </Link>
            </p>
            <p className="more-txt">
              Write me an email
              <Link href="mailto:emil.lipskij@gmail.com" target="_blank">
                <a>
                  <HiOutlineMail className="mail-logo" size={30} alt="logo" />
                </a>
              </Link>
            </p>
            <p className="more-txt">
              Or contact me on
              <Link
                href="https://www.linkedin.com/in/emil-lipskij-6920831b2"
                target="_blank"
              >
                <a>
                  <GrLinkedin className="fb-logo" size={25} alt="logo" />
                </a>
              </Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default More;
