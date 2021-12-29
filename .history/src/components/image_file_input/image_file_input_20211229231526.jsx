import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUpLoader, name, onFileChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
      />
      <button>{name || 'No File'}</button>
    </div>
  );
};

export default ImageFileInput;
