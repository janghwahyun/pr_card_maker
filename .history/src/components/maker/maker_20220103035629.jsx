import React, { useEffect, useState, useHistory } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './maker.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, CardRepository }) => {
  const [cards, setCards] = useState({});
  const historyState = useHistory().state;
  const [useId, setUserId] = useState(historyState && historyState.id);

  const navigator = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
        console.log(userId);
      } else {
        navigator('/');
      }
    });
  });

  // const addCard = card => {
  //   // cards를 복사해오고 card라는 추가할거만 추가해 주면 됨.
  //   const updated = [...cards, card];
  //   setCards(updated);
  // };

  const createOrupdatedCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrupdatedCard}
          updatedCard={createOrupdatedCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
