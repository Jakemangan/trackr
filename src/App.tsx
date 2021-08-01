import React, {useEffect} from 'react';
import {Auth, Button} from "@supabase/ui";
import supabaseClient from "./utils/supabaseClient";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import AppMain from "./pages/AppMain";
import Container from "./components/Container";
import signIn from "./utils/signIn";
import Login from "./components/Login";
import {ProtectedRoute} from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";


import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import {FirebaseAuthProvider, useFirebaseAuth} from "./context/Context";
import "./index.scss";
import Navbar from "./components/Navbar/Navbar";

firebase.initializeApp({
    apiKey: "AIzaSyB-kCwDo38kkrm0WPFgOxAXcKweqYNvFHY",
    authDomain: "trackr-dev-810b9.firebaseapp.com",
    projectId: "trackr-dev-810b9",
    storageBucket: "trackr-dev-810b9.appspot.com",
    messagingSenderId: "910973334184",
    appId: "1:910973334184:web:bf9941c220d17ec4d7889d"
});

const auth = firebase.auth();

function App() {

    const user = useFirebaseAuth();
    console.log("user", user);
    // const [value, loading] = useAuthState(auth);
    // let displayApp = false;
    // console.log("displayApp: ", displayApp);
    let displayApp = true;

    useEffect(() => {
        firebase.auth().onAuthStateChanged(authUser => {
            authUser ? localStorage.setItem("userIsLogged", String(true)) : localStorage.removeItem("userIsLogged");
        })
    })

    return (
        <>
            {displayApp &&
                <>
                    <Navbar>

                    </Navbar>
                    <Switch>
                        <Route path="/" exact>
                            {user ? <Dashboard/> : <Login/> }
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </Switch>
                </>
            }
            {!displayApp &&
            <h4>Loading...</h4>
            }
        </>

    )
}

export default App;
