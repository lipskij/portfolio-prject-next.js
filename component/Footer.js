import React from "react";
import styles from "../styles/Home.module.css";
import {moreBottom} from '../styles/contacts.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={moreBottom}>
        <li>Contact number +370 00 00 000</li>
        <li>Visit www.link.com</li>
        <li>Terms and condisions</li>
      </ul>
      <ul className={moreBottom}>
        <li>About</li>
        <li>Projects</li>
        <li>Privacy policy</li>
      </ul>
      <ul className={moreBottom}>
        <li>Help</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
      <div className={styles.credit}>
        <p className={styles.madeBy}>made by Emil Lipskij</p>
      </div>
    </footer>
  );
};

export default Footer;
