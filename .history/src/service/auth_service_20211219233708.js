import firebase from 'firebase';
import firebaseApp from './firebase';
import 'firebase/auth';

// providername자리에 페이스북, 인스타그램인지르 받아옴...
class AuthService {
  login(google) {
    const authProvider = new firebase.auth[`${google}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
