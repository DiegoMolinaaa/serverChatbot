// Server dependencies
const express = require("express");
const app = express();

// Middleware
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3000;

// Dependencies
const {initializeApp} = require("firebase/app");
const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithCredential,
    onAuthStateChanged,
} = require("firebase/auth");



// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACDY8KVf9sPWIIHRrroPHUXb2F-rSGuRI",
    authDomain: "chatbotvanguardia.firebaseapp.com",
    projectId: "chatbotvanguardia",
    storageBucket: "chatbotvanguardia.firebasestorage.app",
    messagingSenderId: "325175137681",
    appId: "1:325175137681:web:0742b742b9241a8c2d7630",
    measurementId: "G-Q6VW0WKLZB"
  };
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

// Inicialización del servidor
app.use(cors());
app.use(express.json());

var urlEncodeParser = bodyParser.urlencoded({extended: true});
app.use(urlEncodeParser);

//Levantar el servidor
app.listen(port, () => {
});

//Email and Password LogIn/SignIn/SignOut
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
});

signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
});

//Mantener Sesion Activa
onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Usuario autenticado:", user);
    } else {
      console.log("No hay usuario autenticado");
    }
  });

