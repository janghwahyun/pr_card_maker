import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './maker.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: '1117jhh',
      theme: 'dark',
      title: 'Web Designer',
      email: '1117jhh@gmail.com',
      company: 'daum',
      message: 'go for it',
      fileName: 'jang',
      fileURL: null,
    },
    {
      id: '2',
      name: '1117jhh2',
      theme: 'light',
      title: 'Web Designer',
      company: 'daum',
      email: '1117jhh@gmail.com',
      message: 'go for it',
      fileName: 'jang',
      fileURL: 'jang.png',
    },
    {
      id: '3',
      name: '1117jhh3',
      theme: 'colorful',
      title: 'Web Designer',
      company: 'daum',
      email: '1117jhh@gmail.com',
      message: 'go for it',
      fileName: 'jang',
      fileURL: null,
    },
  ]);

  const navigator = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigator('/');
      }
    });
  });
  addCard(card)=>{
    console.log(card);
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
