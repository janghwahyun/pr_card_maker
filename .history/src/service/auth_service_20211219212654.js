import firebase from 'firebase';
import firebaseApp from './firebase';
import 'firebase/auth';

// providername자리에 페이스북, 인스타그램인지르 받아옴...
class AuthService {
  login(providerName) {
    const authProvider = firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signWithPopup(authProvider);
  }
}

export default AuthService;
