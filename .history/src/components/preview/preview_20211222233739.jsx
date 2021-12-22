import React from 'react';
import styles from './preview.module.css';

const Preview = ({ card }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>preview</h1>
    {cards.map(card => (<Card card={card}))}
  </section>
);

export default Preview;
