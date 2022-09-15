import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase-config.json";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
