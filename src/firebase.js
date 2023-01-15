import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA-5CzzmAUxrgZi-vHQ3x-Bm-NGGu_SXBM",
    authDomain: "netflix-clone-e7907.firebaseapp.com",
    projectId: "netflix-clone-e7907",
    storageBucket: "netflix-clone-e7907.appspot.com",
    messagingSenderId: "195321613489",
    appId: "1:195321613489:web:9135e8aab4785f414fe690"
  };
  
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;