import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyAIiO5SAKWMlZfHAKG3gDv4CXSmqpb6zsg",
  authDomain: "fir-37aa1.firebaseapp.com",
  databaseURL: "https://fir-37aa1-default-rtdb.firebaseio.com",
  projectId: "fir-37aa1",
  storageBucket: "fir-37aa1.appspot.com",
  messagingSenderId: "453904724508",
  appId: "1:453904724508:web:a517ce5053b8d9c50ba5d9",
  measurementId: "G-Y78TCJ6BKR",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

reportWebVitals();
