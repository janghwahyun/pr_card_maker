import React, { useRef } from 'react';

import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUpLoader, name, onFileChange }) => {
  // onButtonClick을 누르면 input이 클릭이 된거 처럼 해야하니까
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onFileChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No File'}
      </button>
    </div>
  );
};

export default ImageFileInput;
