import React, { useEffect, useState } from 'react';

import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';

import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [card, setCards] = useState([
    {
      id: '1',
      name: '1117jhh',
      theme:'light',
      title: 'Web Designer',
      email:'1117jhh@gmail.com',
      message:'go for it',
      fileName:'jang',
      fileURL:'',
        {
      id: '2',
      name: '1117jhh',
      theme:'light',
      title: 'Web Designer',
      email:'1117jhh@gmail.com',
      message:'go for it',
      fileName:'jang',
      fileURL:'',
    },
      {
      id: '3',
      name: '1117jhh',
      theme:'light',
      title: 'Web Designer',
      email:'1117jhh@gmail.com',
      message:'go for it',
      fileName:'jang',
      fileURL:'',
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
