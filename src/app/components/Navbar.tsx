// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../../public/assets/Logo.png';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src={Logo} alt="Logo" className={styles.logo} />
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.navLinkItem}>
            Home
          </Link>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <Link href="/meus-pets" className={styles.navLinkItem}>
                Meus Pets
              </Link>
            </li>
            <li>
              <button onClick={logout} className={styles.navLinkItem}>
                Sair
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login" className={styles.navLinkItem}>
                Entrar
              </Link>
            </li>
            <li>
              <Link href="/register" className={styles.navLinkItem}>
                Registrar
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
