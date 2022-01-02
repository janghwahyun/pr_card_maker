import Login from './components/login/login';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRepository from './service/card_repository';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
