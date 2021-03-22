import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className='more-bottom'>
        <li>Contact number +370 00 00 000</li>
        <li>Visit www.link.com</li>
        <li>Terms and condisions</li>
      </ul>
      <ul className='more-bottom'>
        <li>About</li>
        <li>Projects</li>
        <li>Privacy policy</li>
      </ul>
      <ul className='more-bottom'>
        <li>Help</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
      <div className={styles.credit}>
        <h5 className={styles.madeBy}>made by Emil Lipskij</h5>
      </div>
    </footer>
  );
};

export default Footer;
