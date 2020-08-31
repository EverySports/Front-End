import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDVw0lnxD3GZMQT9fWaXymlXwCqTyFQ5kE',
        authDomain: 'everysports-b9b41.firebaseapp.com',
        databaseURL: 'https://everysports-b9b41.firebaseio.com',
        projectId: 'everysports-b9b41',
        storageBucket: 'everysports-b9b41.appspot.com',
        messagingSenderId: '393763741776',
        appId: '1:393763741776:web:6aa16dc9f52493fcb63155',
        measurementId: 'G-P46W433S8E',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}
export default new Fire();
