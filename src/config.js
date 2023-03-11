
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhJ7mrXySmTm5hlwmOcepLOOwhhQngaZE",
  authDomain: "group-bhupinder-sandeep.firebaseapp.com",
  projectId: "group-bhupinder-sandeep",
  storageBucket: "group-bhupinder-sandeep.appspot.com",
  messagingSenderId: "392582263678",
  appId: "1:392582263678:web:34fd439b5c453342df392f",
  measurementId: "G-BZQ1V0VNJD"
};

const app =initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth,app};