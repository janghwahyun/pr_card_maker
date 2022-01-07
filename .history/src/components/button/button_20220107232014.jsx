import React, { memo } from 'react';
import styles from './button.module.css';

// name, onclick 콜백을 받아 올 수 있도록 만든 다음에...
const Button = memo(({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
));

export default Button;
