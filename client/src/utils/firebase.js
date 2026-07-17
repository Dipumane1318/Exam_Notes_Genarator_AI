
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotes-cd624.firebaseapp.com",
  projectId: "authexamnotes-cd624",
  storageBucket: "authexamnotes-cd624.firebasestorage.app",
  messagingSenderId: "206453716296",
  appId: "1:206453716296:web:5a9d874e153d717a7b6f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider  } 