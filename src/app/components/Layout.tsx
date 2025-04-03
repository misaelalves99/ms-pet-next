// app/components/Layout.tsx
'use client';

import { ReactNode } from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
