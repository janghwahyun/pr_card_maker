import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {true && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/images/chita2.png" alt="logo" />
    <h1 className={styles.title}>웃자고~</h1>
  </header>
);
export default Header;
