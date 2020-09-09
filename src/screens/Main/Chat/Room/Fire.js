// @refresh state
import * as fb from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVw0lnxD3GZMQT9fWaXymlXwCqTyFQ5kE',
  authDomain: 'everysports-b9b41.firebaseapp.com',
  databaseURL: 'https://everysports-b9b41.firebaseio.com',
  projectId: 'everysports-b9b41',
  storageBucket: 'everysports-b9b41.appspot.com',
  messagingSenderId: '393763741776',
  appId: '1:393763741776:web:6aa16dc9f52493fcb63155',
  measurementId: 'G-P46W433S8E',
};

export function init() {
  if (fb.apps.length === 0) fb.initializeApp(firebaseConfig);
}
