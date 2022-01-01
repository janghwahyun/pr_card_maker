import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';

import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      // current에 있는 value가져다 쓰고 없으면 '텅텅'
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      //theme이 없다면 공백이 나올 수 없지, 3개중에 하나 선택해야 하니까
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    //form을 작성하면 reset이 된다.
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
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
        <option placeholder="dark">dark</option>
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
        <FileInput />
      </div>
      <Button name="ADD" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
