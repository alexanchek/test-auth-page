import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1dws6l1Sh_jKnBd4MCtyJIlalYuxG_PQ",
    authDomain: "auth-test-page-21d53.firebaseapp.com",
    projectId: "auth-test-page-21d53",
    storageBucket: "auth-test-page-21d53.appspot.com",
    messagingSenderId: "630546616713",
    appId: "1:630546616713:web:aeb566f09b845e64c0d158"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

