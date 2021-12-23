import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>preview</h1>
    <li className={styles.cards}>
      {cards.map(card => (
        <Card card={card} />
      ))}
    </li>
  </section>
);

export default Preview;
