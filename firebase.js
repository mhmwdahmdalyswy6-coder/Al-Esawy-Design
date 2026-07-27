import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAq6Tt9_XDgaDrTLgxZ5OdkXxkWp-5zAxg",
  authDomain: "al-esawy-design.firebaseapp.com",
  projectId: "al-esawy-design",
  storageBucket: "al-esawy-design.firebasestorage.app",
  messagingSenderId: "735158078702",
  appId: "1:735158078702:web:9798b1f6d49e4a2cadf7ff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };