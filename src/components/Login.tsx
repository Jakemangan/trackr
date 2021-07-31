import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";
import {Button} from "@supabase/ui";
import React from "react";
import firebase from "firebase/app";

export default function Login (props) {

    const auth = firebase.auth();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )

    // return (
    //     <>
    //         <h1>Login</h1>
    //         <Button onClick={() => signIn(supabaseClient)}>Login</Button>
    //     </>
    // )
}

