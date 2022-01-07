import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default.jpeg';
const Card = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="default" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={message}>{message}</p>
      </div>
    </li>
  );
});

//팀별로 색깔 바꾸기
function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    // default:
    //   throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
