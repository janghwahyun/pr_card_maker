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
    </form>
  );
};

export default CardEditForm;
