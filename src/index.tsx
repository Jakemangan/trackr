import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {FirebaseAuthProvider} from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <FirebaseAuthProvider>
          <App />
          </FirebaseAuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

