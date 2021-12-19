import firebase from 'firebase';
import 'firebase/auth';
import firebaseApp from './firebase';

// providername자리에 페이스북, 인스타그램인지르 받아옴...
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
