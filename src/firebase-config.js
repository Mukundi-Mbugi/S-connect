import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCp5FjCQ1U6Kdby9zNyUE-eVXPFSkCCH4A",
  authDomain: "fir-connect-login.firebaseapp.com",
  projectId: "fir-connect-login",
  storageBucket: "fir-connect-login.appspot.com",
  messagingSenderId: "633132753075",
  appId: "1:633132753075:web:28dd8d57f17774786c90c6"
};


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export default app