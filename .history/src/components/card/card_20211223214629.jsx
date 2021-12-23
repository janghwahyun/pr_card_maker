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
    <li>
      <img src={url} alt="default phto" />
      <div>
        <h1>{name}</h1>
        <p>{company}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{message}</p>
      </div>
    </li>
  );
};

export default Card;
