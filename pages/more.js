import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";

// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag

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
              <Link href="https://github.com/lipskij">
                <FaGithubAlt className="git-logo" size={30} />
              </Link>
            </p>
            <p className="more-txt">
              Write me an email
              <Link href="mailto:emil.lipskij@gmail.com">
                <HiOutlineMail className="mail-logo" size={30} />
              </Link>
            </p>
            <p className="more-txt">
              Or contact me on
              <Link href="https://www.linkedin.com/in/emil-lipskij-6920831b2">
                <GrLinkedin className="fb-logo" size={25} />
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
