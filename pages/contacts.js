import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";
import ContactsSvg from '../component/ContactsSvg';
import {
  moreText,
  moreTxt,
  gitLogo,
  fbLogo,
  mailLogo,
  contactsSvg,
} from "../styles/contacts.module.css";

const More = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <h1 className={moreText}>Contact Us!</h1>
      <main className={styles.more}>
        <div>
          <h1>Find us on the interwebs!</h1>
          <p className={moreTxt}>
            To find more projects{" "}
            <Link href='https://github.com/lipskij'>
              <a target='_blank'>
                <FaGithubAlt className={gitLogo} size={35} alt='logo' />
              </a>
            </Link>
          </p>
          <p className={moreTxt}>
            Write me an email
            <Link href='mailto:emil.lipskij@gmail.com'>
              <a target='_blank'>
                <HiOutlineMail className={mailLogo} size={35} alt='logo' />
              </a>
            </Link>
          </p>
          <p className={moreTxt}>
            Or contact me on
            <Link href='https://www.linkedin.com/in/emil-lipskij-6920831b2'>
              <a target='_blank'>
                <GrLinkedin className={fbLogo}size={30} alt='logo' />
              </a>
            </Link>
          </p>
        </div>
        <div className={contactsSvg}>
          <ContactsSvg />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default More;
