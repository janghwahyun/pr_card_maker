import './app.css';
import Login from './components/login/login';
import styles from './app.mopdule.css';

function App({ authService }) {
  return (
    <div className={StyleSheet.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
