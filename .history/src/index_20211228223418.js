import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import './index.module.css';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';

const authService = new AuthService();
const ImageUploader = new ImageUploader();
cosnt FileInput

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
