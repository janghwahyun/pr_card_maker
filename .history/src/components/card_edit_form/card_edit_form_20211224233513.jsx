import React from 'react';
import styles from './card_edit_form_module.css';

import Button from '../ button/button';
import imageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const onSubmit = () => {};
  return (
    <form>
      <input type="text" name="name" value={name}></input>
      <input type="text" name="company" value={company}></input>
      <select name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dart">dart</option>
        <option value="colorful">colorful</option>
      </select>
      <input type="text" name="title" value={title}></input>
      <input type="text" name="email" value={email}></input>
      <textarea name="message" value={message}></textarea>
      <imageFileInput />
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
