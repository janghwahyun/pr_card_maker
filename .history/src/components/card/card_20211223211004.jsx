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

  return (
    <li>
      <img src="" alt="" />
    </li>
  );
};

export default Card;
