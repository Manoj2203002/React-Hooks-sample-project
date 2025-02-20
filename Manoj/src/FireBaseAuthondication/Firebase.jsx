import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBX3Qi8dtZdBB-jnaP5tsKdAXPXSKqGopk",
  authDomain: "reactemail-50522.firebaseapp.com",
  projectId: "reactemail-50522",
  storageBucket: "reactemail-50522.firebasestorage.app",
  messagingSenderId: "549288201723",
  appId: "1:549288201723:web:cddd6a4bcc32b518abcf5e",
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);