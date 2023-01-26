// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZtwIJZZ_NwbF0XT0q5Z_Re9vV5r2mOqI",
  authDomain: "reactfireapp-a0129.firebaseapp.com",
  projectId: "reactfireapp-a0129",
  storageBucket: "reactfireapp-a0129.appspot.com",
  messagingSenderId: "179445348702",
  appId: "1:179445348702:web:756e42d3953e3480cd37cf",
  measurementId: "G-6MV9BBCWSD",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
