import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [active, setActive] = useState('home');

  const handleClick = (page: string) => {
    setActive(page);
  };

  return (
    <nav>
      <ul>
        <Link href={'/'} passHref>
          <li
            className={active === 'home' ? 'active' : ''}
            onClick={() => handleClick('home')}
          >
            Home
          </li>
        </Link>
        <Link href={'/about'} passHref>
          <li
            className={active === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >
            About
          </li>
        </Link>
        <Link href={'/gallery'} passHref>
          <li
            className={active === 'gallery' ? 'active' : ''}
            onClick={() => handleClick('gallery')}
          >
            Gallery
          </li>
        </Link>
        <Link href={'/projects'} passHref>
          <li
            className={active === 'projects' ? 'active' : ''}
            onClick={() => handleClick('projects')}
          >
            Projects
          </li>
        </Link>
        
      </ul>
      <style jsx>{`
        nav {
          background: var(--background);
          padding: 1.4rem;
          display: flex;
          justify-content: end;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        li {
          cursor: pointer;
          color: #fff;
        }
        .active {
          font-weight: bold;
          border-bottom: 2px solid var(--foreground);
          color: var(--foreground);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
