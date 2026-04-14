import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
     apiKey: "AIzaSyC4BzptnxsSL56AJKPUdWygTOXmbcQAicQ",
  authDomain: "airepo-f5cef.firebaseapp.com",
  projectId: "airepo-f5cef",
  storageBucket: "airepo-f5cef.firebasestorage.app",
  messagingSenderId: "220037355048",
  appId: "1:220037355048:web:71cb77683fe94ec9ac471d",
  measurementId: "G-V3EQ167ZZZ"
});

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const login = async () => {
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export { auth };
