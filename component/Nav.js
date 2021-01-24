import React from 'react';
import Link from 'next/link';
import ToggleTheme from '../component/ToggleTheme';

const Nav = () => {
  return (
    <nav>
      <ul>
      <p className='logo'>{`< generic logo />`}</p>
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
