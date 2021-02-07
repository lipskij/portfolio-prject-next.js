import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import Drawer from "./Drawer";
import css from "styled-jsx/css";
import ToggleTheme from "../component/ToggleTheme";

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
        <ul onClick={() => setIsOpen(!isOpen)}>
          <p className="logo">{`< generic logo />`}</p>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/more">
              <a>More</a>
            </Link>
          </li>
        </ul>
      </Drawer>
      <ul className='desctop-ul'>
          <p className="logo">{`< generic logo />`}</p>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/more">
              <a>More</a>
            </Link>
          </li>
        </ul>
      <div className="toggle">
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Nav;
