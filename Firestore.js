import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAXiWeJcehtpyWGb-0GuKhf11sZhPnWMW4",
  authDomain: "todolist-3cc73.firebaseapp.com",
  projectId: "todolist-3cc73",
  storageBucket: "todolist-3cc73.appspot.com",
  messagingSenderId: "138529154144",
  appId: "1:138529154144:web:648b22c5e5ff5257dacf05",
  measurementId: "G-37GMYFHZ1J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firestore = firebase.firestore();

export default firestore;