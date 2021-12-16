import firebase from 'firebase';

// providername자리에 페이스북, 인스타그램인지르 받아옴...
class AuthService {
  login(providename) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
  }
}
