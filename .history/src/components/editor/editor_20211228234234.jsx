import React from 'react';
import styles from './editor.module.css';

import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({ FileInput, cards, addCard, updatedCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>editor</h1>
    {Object.keys(cards).map(key => (
      <CardEditForm
        key={key}
        card={cards[key]}
        updatedCard={updatedCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
