import React from 'react';
import styles from './header.module.css';

// onlogout정보가 보여준다면 로그아웃 버튼을 보여줄거임.
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
