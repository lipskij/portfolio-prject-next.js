import React, { useState } from 'react';
import Link from 'next/link';
import ToggleTheme from '../component/ToggleTheme';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/more">
            <a>More</a>
          </Link>
        </li>
        <ToggleTheme />
      </ul>
    </nav>
  );
};

export default Nav;
