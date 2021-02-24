import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.more}>
      <ul className='more-bottom'>
        <li>Contact number +370 12 34 567</li>
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
        <li>FQA</li>
        <li>Blog</li>
      </ul>
      <div className={styles.credit}>
        <h5 className={styles.madeBy}>made by Emil Lipskij</h5>
      </div>
    </footer>
  );
};

export default Footer;
