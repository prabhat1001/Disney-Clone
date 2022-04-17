import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA65Ff4wXwZupTulWSP-WbewwVZRiA5M6M",
    authDomain: "disneyplus-clone-de04a.firebaseapp.com",
    projectId: "disneyplus-clone-de04a",
    storageBucket: "disneyplus-clone-de04a.appspot.com",
    messagingSenderId: "204934799623",
    appId: "1:204934799623:web:3b7e4f9658232b71baa5a2",
    measurementId: "G-DKM8MKKS8C"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

const handleAuth = ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        alert(error.message);
    })
}


export {auth, provider, storage,handleAuth};
export default db;