import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default.jpeg';
const Card = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={styles.card}>
      <img className={styles.avatar} src={url} alt="default photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={}>{company}</p>
        <p className={}>{title}</p>
        <p className={}>{email}</p>
        <p>{message}</p>
      </div>
    </li>
  );
};

export default Card;
