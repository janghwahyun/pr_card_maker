import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <header>
    {onLogout && (
      <button className={styles.header} onClick={onLogout}>
        Logout
      </button>
    )}
  </header>
);
export default Header;
