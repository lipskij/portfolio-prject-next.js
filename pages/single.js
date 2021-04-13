import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Link from "next/link";
import ToggleTheme from "../component/ToggleTheme";
import Gallery from "../component/Gallery";
import ImageData from "../component/ImageData";
import SliderImageData from "../component/SliderImageData";
import {
  moreText,
  moreTxt,
  gitLogo,
  fbLogo,
  mailLogo,
  contactsSvg,
} from "../styles/contacts.module.css";
import ContactsSvg from "../component/ContactsSvg";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedin } from "react-icons/gr";
import Logo from "../component/Logo";
import Hamburger from "../component/Hamburger";
import Drawer from "../component/Drawer";
import css from "styled-jsx/css";

const { className: hamburgerClassName, styles: hamburgerStyles } = css.resolve`
  @media screen and (min-width: 480px) {
    .root {
      display: none;
    }
  }
`;

const Single = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Front End App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        {hamburgerStyles}
        <Hamburger
          className={hamburgerClassName}
          toggled={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Drawer className={hamburgerClassName} isOpen={isOpen}>
          <ul onClick={() => setIsOpen(!isOpen)}>
            <li>
              <Link href='/'>
                <a data-page='#home'>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/single#gallery'>
                <a data-page='#gallery'>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href='/single#contacts'>
                <a data-page='#contacts'>Contacts</a>
              </Link>
            </li>
          </ul>
        </Drawer>
        <div className='navSVG'>
          <svg
            width='34'
            height='34'
            viewBox='0 0 340 340'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='236.5'
              y1='237.004'
              x2='236.5'
              y2='103'
              stroke='white'
              strokeWidth='5'
            />
            <rect
              x='85'
              y='94'
              width='171'
              height='152'
              stroke='white'
              strokeWidth='2'
            />
            <circle cx='170.5' cy='169.5' r='134' stroke='white' />
            <circle cx='170.5' cy='169.5' r='144' stroke='white' />
            <circle cx='170' cy='170' r='169.5' stroke='white' />
            <rect
              x='102'
              y='107'
              width='117'
              height='126'
              stroke='white'
              strokeWidth='2'
            />
          </svg>
        </div>
        <ul className='desctop-ul'>
          <li>
            <Link href='/single'>
              <a data-page='#home'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/single#gallery'>
              <a data-page='#gallery'>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href='/single#contacts'>
              <a data-page='#contacts'>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <a className={styles.separete} name='home'></a>
        <section className={styles.home}>
          <div className='toggle'>
            <ToggleTheme />
          </div>
          <Logo />
          <div className={styles.text}>
            <h1>Brightest ideas for YOUR Brand!</h1>
            <div className='button-space'>
              <button className='home-btn'>
                <Link rel='preload' href='/more'>
                  <a>Contact Us!</a>
                </Link>
              </button>
            </div>
            <p>This page is for my portfolio.</p>
            <p>It is made using React and Nextjs and Framer Motion.</p>
            <p>I'll be ading a text that user can unfold to read more.</p>
            <p>Possibility to toggle between light and dark mode</p>
            <p>
              User can switch to single page{" "}
              <Link rel='preload' href='/'>
                <a className={styles.single}>Mode</a>
              </Link>
            </p>
          </div>
        </section>
        <a className={styles.separete} name='gallery'></a>
        <section className={styles.section}>
          <h1>Gallery</h1>
          <div>
            <ImageData />
          </div>
          <div>
            <Gallery slides={SliderImageData} />
          </div>
          <div id='image-modal'></div>
        </section>
        <a className={styles.separete} name='contacts'></a>
        <section className={styles.section}>
          <div className={styles.more}>
            <div>
              <h1>Find us on the interwebs!</h1>
              <p className={moreTxt}>
                To find more projects{" "}
                <Link rel='dns-prefetch' href='https://github.com/lipskij'>
                  <a target='_blank'>
                    <FaGithubAlt className={gitLogo} size={35} alt='logo' />
                  </a>
                </Link>
              </p>
              <p className={moreTxt}>
                Write me an email
                <Link rel='dns-prefetch' href='mailto:emil.lipskij@gmail.com'>
                  <a target='_blank'>
                    <HiOutlineMail className={mailLogo} size={35} alt='logo' />
                  </a>
                </Link>
              </p>
              <p className={moreTxt}>
                Or contact me on
                <Link
                  rel='dns-prefetch'
                  href='https://www.linkedin.com/in/emil-lipskij-6920831b2'
                >
                  <a target='_blank'>
                    <GrLinkedin className={fbLogo} size={30} alt='logo' />
                  </a>
                </Link>
              </p>
            </div>
            <div className={contactsSvg}>
              <ContactsSvg />
            </div>
          </div>
        </section>
      </main>
      <div id='image-modal'></div>
      <Footer />
    </div>
  );
};

export default Single;
