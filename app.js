import express from 'express'
const app = express()
const port = 3000

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGRVeMqscc6VFC84R3CbHfpH6j_0wM6QQ",
  authDomain: "test-fb-mintic.firebaseapp.com",
  projectId: "test-fb-mintic",
  storageBucket: "test-fb-mintic.appspot.com",
  messagingSenderId: "159181197302",
  appId: "1:159181197302:web:899c84b982022f000d41d7",
  measurementId: "G-ZZTPH7VXZ5"
};

// Initialize Firebase
const FBapp = initializeApp(firebaseConfig);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})