import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBkroU9own7FTlBiyBCznoLdBOiOtqWXD4",
  authDomain: "linkedin-clone-18386.firebaseapp.com",
  projectId: "linkedin-clone-18386",
  storageBucket: "linkedin-clone-18386.appspot.com",
  messagingSenderId: "874062335791",
  appId: "1:874062335791:web:0bef1084352f881c68dbda",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
