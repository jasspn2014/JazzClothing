import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBZFJHWFjZQCBUHU7vSOF36KB90i_74qtE",
  authDomain: "ecommerceweb-40eb9.firebaseapp.com",
  projectId: "ecommerceweb-40eb9",
  storageBucket: "ecommerceweb-40eb9.appspot.com",
  messagingSenderId: "570666948863",
  appId: "1:570666948863:web:e9f1174962244a96e7d4ca",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;