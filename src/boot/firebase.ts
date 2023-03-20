import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdjiiO67Sgnd4uEhikVBoZ081uvOf1S04',
  authDomain: 'qwitter-study.firebaseapp.com',
  projectId: 'qwitter-study',
  storageBucket: 'qwitter-study.appspot.com',
  messagingSenderId: '383678900585',
  appId: '1:383678900585:web:434dd296224ad9a956f5f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
