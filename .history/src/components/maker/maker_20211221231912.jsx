import { onLog } from 'firebase';
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = ({ authService }) => {
  const onLogout = () => {
    authService.onLogout();
  };

  return (
    <section>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
