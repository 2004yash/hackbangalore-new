import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNojoDZv0sXVDKProM666bZVwgRvqXSWs",
    authDomain: "hackbangalore-75fdc.firebaseapp.com",
    projectId: "hackbangalore-75fdc",
    storageBucket: "hackbangalore-75fdc.appspot.com",
    messagingSenderId: "899181383871",
    appId: "1:899181383871:web:b3f772eee7999a49a6b60a"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const docRef = db.doc("insideOut");
docRef.get().then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
