import React, { useState } from 'react';
import Link from 'next/link';
import ToggleTheme from "../component/ToggleTheme";

const Nav = () => {
  const [dark, setDark] = useState(false);

  console.log(dark);

  return (
    <nav>
      <ToggleTheme />
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
        <button onClick={() => setDark(!dark)}>
          {dark ? 'dark' : 'light'}
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
