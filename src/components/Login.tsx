import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";
import {Button} from "@supabase/ui";
import React from "react";

export default function Login (props) {
    return (
        <>
            <h1>Login</h1>
            <Button onClick={() => signIn(supabaseClient)}>Login</Button>
        </>
    )
}

