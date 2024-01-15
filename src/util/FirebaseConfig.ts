import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoZGquq4Bn5aSoRjyjtuEBigMB7G4_fsw",
  authDomain: "acertlogin.firebaseapp.com",
  projectId: "acertlogin",
  storageBucket: "acertlogin.appspot.com",
  messagingSenderId: "168255220041",
  appId: "1:168255220041:web:b55dff9925dd8c1cf49298"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

