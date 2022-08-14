import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm1PzMugu-4UdhWF5iar1ZZCADEpV6ouE",
  authDomain: "slack-clone-e9eba.firebaseapp.com",
  databaseURL: "https://slack-clone-e9eba-default-rtdb.firebaseio.com",
  projectId: "slack-clone-e9eba",
  storageBucket: "slack-clone-e9eba.appspot.com",
  messagingSenderId: "979431861354",
  appId: "1:979431861354:web:bebccc328130c737c92e13",
  measurementId: "G-PMLNYM5JB0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
