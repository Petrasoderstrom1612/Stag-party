import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWWHPDcsvinG-a9yI1ZRiLwSumniFgjyc",
  authDomain: "challenges-538ce.firebaseapp.com",
  projectId: "challenges-538ce",
  storageBucket: "challenges-538ce.appspot.com",
  messagingSenderId: "1067234395503",
  appId: "1:1067234395503:web:4029182dcdbfc4fb00d49a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
