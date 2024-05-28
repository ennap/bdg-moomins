// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVUHR0ovfzdB4alikYSSVIgh6z2e7JJNs",
  authDomain: "bracket-debate-game.firebaseapp.com",
  projectId: "bracket-debate-game",
  storageBucket: "bracket-debate-game.appspot.com",
  messagingSenderId: "949645752549",
  appId: "1:949645752549:web:70f0490503b36eb016bc0c",
  measurementId: "G-4WY96GC7F7"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAVUHR0ovfzdB4alikYSSVIgh6z2e7JJNs",
        authDomain: "bracket-debate-game.firebaseapp.com",
        databaseURL: 'https://default.firebaseio.com',
        projectId: "bracket-debate-game",
        storageBucket: "bracket-debate-game.appspot.com",
        messagingSenderId: "949645752549",
    }
  };