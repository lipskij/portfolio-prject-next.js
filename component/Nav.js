import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import Drawer from "./Drawer";
import css from "styled-jsx/css";

const { className: hamburgerClassName, styles: hamburgerStyles } = css.resolve`
  @media screen and (min-width: 480px) {
    .root {
      display: none;
    }
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {hamburgerStyles}
      <Hamburger
        className={hamburgerClassName}
        toggled={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Drawer className={hamburgerClassName} isOpen={isOpen}>
        {/* <p className='logo'>{`< generic logo />`}</p> */}
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/gallery'>
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href='/contacts'>
              <a>Contacts</a>
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
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/gallery'>
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href='/contacts'>
            <a>Contacts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
