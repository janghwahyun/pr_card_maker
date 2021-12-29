import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUpLoader, name, onFileChange }) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} />
    </div>
  );
};

export default ImageFileInput;
