import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmAiFUUlhaa1bgDWZPDq2Fkt0ssuBrWJo",
  authDomain: "instagram-clone-339a7.firebaseapp.com",
  databaseURL: "https://instagram-clone-339a7.firebaseio.com",
  projectId: "instagram-clone-339a7",
  storageBucket: "instagram-clone-339a7.appspot.com",
  messagingSenderId: "894697476973",
  appId: "1:894697476973:web:9ffc03a34596f506dd8064",
  measurementId: "G-Q0RKN5ZP86",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
