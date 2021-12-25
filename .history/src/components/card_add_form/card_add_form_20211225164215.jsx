import React, { useRef } from 'react';
import styles from './card_add_form.module.css';

import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = () => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const message = useRef();

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef
      company: companyRef
      theme: themeRef
      title: titleRef
      email: emailRef
      message: messageRef
      fileName:
      fileURL:
    };
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      ></input>
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      ></input>
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dart">dart</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      ></input>
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      ></input>
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="ADD" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
