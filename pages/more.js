import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";

const More = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Front End App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Nav />
        <h1 className='more-text'>Contact Us!</h1>
        <main className={styles.more}>
          <div>
            <h1>Find us on the interwebs!</h1>
            <p className='more-txt'>
              To find more projects that i did{" "}
              <Link href='https://github.com/lipskij'>
                <a target='_blank'>
                  <FaGithubAlt className='git-logo' size={35} alt='logo' />
                </a>
              </Link>
            </p>
            <p className='more-txt'>
              Write me an email
              <Link href='mailto:emil.lipskij@gmail.com'>
                <a target='_blank'>
                  <HiOutlineMail className='mail-logo' size={35} alt='logo' />
                </a>
              </Link>
            </p>
            <p className='more-txt'>
              Or contact me on
              <Link href='https://www.linkedin.com/in/emil-lipskij-6920831b2'>
                <a target='_blank'>
                  <GrLinkedin className='fb-logo' size={30} alt='logo' />
                </a>
              </Link>
            </p>
          </div>
          <div className='contacts-svg'>
            <Image
              src='/contacts.svg'
              alt='Contacts picture'
              width={400}
              height={300}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default More;
