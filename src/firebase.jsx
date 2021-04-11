import firebase from 'firebase/app'
import 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8iFYPsxaSiHVJ8QKdmtk_iX7G82HoZCQ",
    authDomain: "reto-programador.firebaseapp.com",
    projectId: "reto-programador",
    storageBucket: "reto-programador.appspot.com",
    messagingSenderId: "1036935791128",
    appId: "1:1036935791128:web:33654058376f55b53eb96d"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)

export const db = fb.firestore()