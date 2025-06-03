// app/components/Footer.tsx

'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2024 <Link href="/">MS Pet</Link>. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
