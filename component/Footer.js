import React from "react";
import Link from "next/link";

const Footer = () => {
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
      <div className='credit'>
        <p className='madeBy'>
          <Link rel='noreferre' href='https://lipskij.xyz/'>
            <a target='_balnk'>
              <i>Made by Emil Lipskij</i>
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
