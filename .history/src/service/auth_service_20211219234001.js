import firebaseApp from './firebase';
import 'firebase/auth';
import firebase from 'firebase/app';

// providername자리에 페이스북, 인스타그램인지르 받아옴...
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
