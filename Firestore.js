import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firestore = firebase.firestore();

export default firestore;
