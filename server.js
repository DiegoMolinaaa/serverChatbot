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
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      res.status(201).json({ user: userCredential.user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      res.status(200).json({ user: userCredential.user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.post("/logout", async (req, res) => {
    try {
      await signOut(auth);
      res.status(200).json({ message: "Sesión cerrada exitosamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



