import React from 'react';
import styles from './card_edit_form_module.css';

import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      ></input>
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dart">dart</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
      ></input>
      <textarea className={styles.textarea} value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>

      <Button name="Delete" onSubmit={onSubmit} />
    </form>
  );
};

export default CardEditForm;
