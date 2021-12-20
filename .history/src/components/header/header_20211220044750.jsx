import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <header>
    {onLogout && (
      <button className={styles.header} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/image/chita2.png" alt="logo" />
    <h1 className={styles.title}>명함 만들기</h1>
  </header>
);
export default Header;
