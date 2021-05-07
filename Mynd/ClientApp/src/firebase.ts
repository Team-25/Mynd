import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAfWKz58uiIA8LLgDVN4q1xISRzUkXkalQ",
  authDomain: "mynd-project.firebaseapp.com",
  databaseURL: "https://mynd-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mynd-project",
  storageBucket: "mynd-project.appspot.com",
  messagingSenderId: "253356081597",
  appId: "1:253356081597:web:63418886db235ea212d2d4",
  measurementId: "G-R9Z0QFX1C9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };