import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8QH9VFcu82J3Xid142hy7L_MH3UsBs-U",
    authDomain: "crwn-clothing-db-939e2.firebaseapp.com",
    projectId: "crwn-clothing-db-939e2",
    storageBucket: "crwn-clothing-db-939e2.appspot.com",
    messagingSenderId: "995183831502",
    appId: "1:995183831502:web:ce4d96b35678abb611239f"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);