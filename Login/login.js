// Firebase kipan ta

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your  web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
          apiKey: "AIzaSyABVW_aeaSCOI5xxWS3y3kffqdvgfkJJrE",
          authDomain: "focus-f58ac.firebaseapp.com",
          projectId: "focus-f58ac",
          storageBucket: "focus-f58ac.appspot.com",
          messagingSenderId: "485165420551",
          appId: "1:485165420551:web:28940675b55fc967e5daa2",
          measurementId: "G-2VV0W1FJ9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Implement user registration (sign up) using email and password:
const email = document.getElementById('email');
const password = document.getElementById('password');

// for signup
createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
                    //User registered Successfully
                    const user = userCredential.user
                    console.log('Registered user:', user);
          }).catch((error) => {
                    // handle registration errors
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Registration error:", errorCode, errorMessage)
          });

// now for login
signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
                    // User logged in successfully
                    const user = userCredential.user;
                    console.log("Logged in user:", user);
          })
          .catch((error) => {
                    // Handle login errors
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Login error:", errorCode, errorMessage);
          });
