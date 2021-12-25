import React from 'react';
import styles from './card_edit_form.module.css';

import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = () => {
  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      ></input>
      <select className={styles.select} name="theme" placeholder="theme">
        <option placeholder="light">light</option>
        <option placeholder="dart">dart</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      ></input>
      <textarea className={styles.textarea} placeholder="Message" />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onSubmit={onSubmit} />
    </form>
  );
};

export default CardAddForm;
