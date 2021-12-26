import React from 'react';
import styles from './card_edit_form.module.css';

import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updatedCard, deleteCard }) => {
  const { name, company, title, email, message, theme } = card;

  const onChange = event => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
  };
  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      ></input>
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dart">dart</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <textarea
        className={styles.textarea}
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
