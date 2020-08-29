import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBG0vsuebRTwkhwC1v9L5huiBNPYZtANRI",
  authDomain: "user-auth-7d025.firebaseapp.com",
  databaseURL: "https://user-auth-7d025.firebaseio.com",
  projectId: "user-auth-7d025",
  storageBucket: "user-auth-7d025.appspot.com",
  messagingSenderId: "137370795999",
  appId: "1:137370795999:web:09fd046ffb90c58781ce6a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
