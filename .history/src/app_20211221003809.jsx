import Login from './components/login/login';
import styles from './app.module.css';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowerRouter>
        <Switch></Switch>
      </BrowerRouter>
    </div>
  );
}

export default App;
