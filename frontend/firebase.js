import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyANoC_rGJOUS9PJHmUT1q77Tpy5gmBhs9Q",
  authDomain: "aisummarizer-a901f.firebaseapp.com",
  projectId: "aisummarizer-a901f",
  storageBucket: "aisummarizer-a901f.firebasestorage.app",
  messagingSenderId: "894635171048",
  appId: "1:894635171048:web:a222b230065f3c3cbb7d5d",
  measurementId: "G-ZWSDRR85DQ"
});

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const login = async () => {
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export { auth };