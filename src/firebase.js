import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbiUwjH-LeUCYwf4iB780_JuGZ2SSk7h8",
  authDomain: "netflix-6f316.firebaseapp.com",
  projectId: "netflix-6f316",
  storageBucket: "netflix-6f316.appspot.com",
  messagingSenderId: "125780217916",
  appId: "1:125780217916:web:26a0bb64e90ff256577339",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
