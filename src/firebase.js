import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJ17rCPCrLUHKsMQ9o_UfEUmN08v8gur0",
    authDomain: "ig-clone-react-28dbd.firebaseapp.com",
    databaseURL: "https://ig-clone-react-28dbd.firebaseio.com",
    projectId: "ig-clone-react-28dbd",
    storageBucket: "ig-clone-react-28dbd.appspot.com",
    messagingSenderId: "949141057105",
    appId: "1:949141057105:web:93149b63a4bf518ec81270"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export {db, auth, storage};