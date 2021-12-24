import React from 'react';
import styles from './card_edit_form_module.css';

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
  return (
    <form>
      <input type="text" name="name" value={name}></input>
      <input type="text" name="company" value={company}></input>
      <select name="theme" value={theme}>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <input type="text" name="title" value={title}></input>
      <input type="text" name="email" value={email}></input>
    </form>
  );
};

export default CardEditForm;
