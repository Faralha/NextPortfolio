import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const isActive = (path:string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav>
      <ul>
        <Link href='/' passHref>
          <li className={pathname === '/' ? 'active' : ''}>Home</li>
        </Link>
        <Link href='/about' passHref>
          <li className={pathname === '/about' ? 'active' : ''}>About</li>
        </Link>
        <Link href='/gallery' passHref>
          <li className={isActive('/gallery') ? 'active' : ''}>Gallery</li>
        </Link>
        <Link href='/projects' passHref>
          <li className={isActive('/projects') ? 'active' : ''}>Projects</li>
        </Link>
      </ul>
      <style jsx>{`
        nav {
          background: var(--background);
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        li {
          cursor: pointer;
          padding: 0.5rem 1rem;
          transition: background 0.3s ease;
        }
        li:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .active {
          font-weight: bold;
          border-bottom: 2px solid currentColor;
        }
      `}</style>
    </nav>
  );
}