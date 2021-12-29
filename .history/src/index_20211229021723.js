import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import './index.module.css';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();

// 이렇게 관리하는것보다 밑으로 관리하는것이 확작성이 생김???
// const FileInput =
//   <ImageFileInput {...props} imageUpLoader={imageUploader} />
// );
const FileInput = props => (
  <ImageFileInput {...props} imageUpLoader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
