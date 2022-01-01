import React from 'react';
import styles from './card_edit_form.module.css';

import Button from '../button/button';

// 직접적으로 받아오지 않아도 되겠죠?
// import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ FileInput, card, updatedCard, deleteCard }) => {
  const { name, company, title, email, message, theme } = card;

  const onFileChange = file => {
    updatedCard({
      ...card,
      fileName: file.name,
    });
  };

  const onChange = event => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updatedCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
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
        <option value="dark">dark</option>
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
        <FileInput onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
