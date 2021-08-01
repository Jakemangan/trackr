import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";
import {Button} from "@supabase/ui";
import React from "react";
import firebase from "firebase/app";
import {Link, useHistory} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Login (props) {

    const auth = firebase.auth();
    const history = useHistory();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(() => {
            localStorage.setItem("userIsLogged", String(true));
            history.push("/dashboard");
        });
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <Link to="/dashboard">Dashboard</Link>
        </>
    )

    // return (
    //     <>
    //         <h1>Login</h1>
    //         <Button onClick={() => signIn(supabaseClient)}>Login</Button>
    //     </>
    // )
}

