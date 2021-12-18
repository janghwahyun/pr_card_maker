import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({ authService }) => {
  const = onLogin = event => {
    authService.login(event.currentTarget.textContent).then(console.log);
  };

  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>google</button>
          </li>
          <li>
            <button onClick={onLogin}>github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
