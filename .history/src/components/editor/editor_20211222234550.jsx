import React from 'react';
import Card_edit_form from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>editor</h1>
    {cards.map(card => (
      <CardEditForm card={card} />
    ))}
  </section>
);

export default Editor;
