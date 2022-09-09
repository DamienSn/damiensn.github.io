import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuFSY9Uu7dIxSWagpdw_-SNHyWnP62w_w",
    authDomain: "portfolio-96a23.firebaseapp.com",
    projectId: "portfolio-96a23",
    storageBucket: "portfolio-96a23.appspot.com",
    messagingSenderId: "357739014785",
    appId: "1:357739014785:web:4631c95c5d162b9bb5fb80"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)