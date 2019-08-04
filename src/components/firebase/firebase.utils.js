import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnDStLDLrfJ1FNwBBFjYIZdUGZ5oAzVrA",
    authDomain: "crown-db-87259.firebaseapp.com",
    databaseURL: "https://crown-db-87259.firebaseio.com",
    projectId: "crown-db-87259",
    storageBucket: "",
    messagingSenderId: "369690069785",
    appId: "1:369690069785:web:5156694193e92270"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase