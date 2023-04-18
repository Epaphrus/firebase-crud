import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAercD_cWG28g2OSlbVFfGf8NW0QvKr9bI",
    authDomain: "fir-tutorial-74043.firebaseapp.com",
    projectId: "fir-tutorial-74043",
    storageBucket: "fir-tutorial-74043.appspot.com",
    messagingSenderId: "1005819559373",
    appId: "1:1005819559373:web:f971ab9f62ae2957d95884",
    measurementId: "G-P3R9BPNWCP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);