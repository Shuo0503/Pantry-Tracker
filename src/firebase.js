import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAL4J2ig3Zg-yU6fk0o-0P1ZF5QylBcGFA",
    authDomain: "pantry-tracker-app-shuo.firebaseapp.com",
    projectId: "pantry-tracker-app-shuo",
    storageBucket: "pantry-tracker-app-shuo.appspot.com",
    messagingSenderId: "778552508736",
    appId: "1:778552508736:web:a0cd4ded4e39be4d49baa5",
    measurementId: "G-VFXMBGSZMG"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };