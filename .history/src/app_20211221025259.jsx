import Login from './components/login/login';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
