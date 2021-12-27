import React from "react";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <ul className='moreBottom'>
        <li>Contact number +370 00 00 000</li>
        <li>Visit www.link.com</li>
        <li>Terms and condisions</li>
      </ul>
      <ul className='moreBottom'>
        <li>About</li>
        <li>Projects</li>
        <li>Privacy policy</li>
      </ul>
      <ul className='moreBottom'>
        <li>Help</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          width: "20vw",
          margin: "0 auto",
        }}
        className='credit'
      >
        <p className='madeBy'>
          <Link rel='noreferre' href='https://lipskij.xyz/'>
            <a target='_balnk'>
              <i> {year} Made by Emil Lipskij </i>
            </a>
          </Link>
        </p>
        <Link rel='dns-prefetch' href='https://github.com/lipskij'>
          <a target='_blank'>
            <FaGithubAlt style={{ margin: "1rem 0" }} size={35} alt='logo' />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
