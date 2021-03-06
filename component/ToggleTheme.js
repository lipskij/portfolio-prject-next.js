import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

// find a way to make switch button to change themes

function ToggleTheme() {
  const [mount, setMount] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <label onChange={toggleTheme} className={theme}>
      {theme === 'light' ? (
        <>
          <input type="checkbox" />
          <span className="switch" />
          <p className='togl-txt'>Darck mode</p>
        </>
      ) : (
        <>
          <input type="checkbox" defaultChecked />
          <span className="switch" />
          <p className='togl-txt'>Light mode</p>
        </>
      )}
      <style jsx>{`
        label {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 25px;
        }
        label input[type='checkbox'] {
          display: none;
        }
        label .switch {
          position: absolute;
          cursor: pointer;
          background-color: #ccc;
          border-radius: 25px;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transition: background-color 0.2s ease;
        }
        label .switch::before {
          position: absolute;
          content: '';
          left: 2px;
          top: 2px;
          width: 21px;
          height: 21px;
          background-color: #aaa;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
        label input[type='checkbox']:checked + .switch::before {
          transform: translateX(25px);
          background-color: #6699cc;
        }
        label input[type='checkbox']:checked + .switch {
          background-color: #336699;
        }
        .togl-txt {
          padding: 2.5rem 0 0 0;
          width: 10rem;
          text-align: left;
          margin: 0;
        }
      `}</style>
    </label>
  );
}

export default ToggleTheme;
