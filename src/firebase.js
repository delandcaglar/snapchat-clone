import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYy4xP8cVD1DWz_uh2SicKDIeERLI1fWk",
  authDomain: "snapchat-delo.firebaseapp.com",
  projectId: "snapchat-delo",
  storageBucket: "snapchat-delo.appspot.com",
  messagingSenderId: "328077899235",
  appId: "1:328077899235:web:28ee7a26a405556cb7dcd6",
  measurementId: "G-QK0DYP5Q9N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider, db, storage};




















































































































































