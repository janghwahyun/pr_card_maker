import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>preview</h1>
    <ui className={styles.cards}>
      {Object.keys[cards].map(key => (
        <Card key={key} card={cards[key]} />
      ))}
    </ui>
  </section>
);

export default Preview;
