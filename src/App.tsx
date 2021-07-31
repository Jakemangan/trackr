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


function App() {
    useEffect(() => {
        const {data: authListener} = supabaseClient.auth.onAuthStateChange((event, session) => {
            fetch("/api/auth", {
                method: "POST",
                headers: new Headers({"Content-Type": "application/json"}),
                credentials: "same-origin",
                body: JSON.stringify({event, session})
            }).then(res => {
                
            })
        });
        return () => {
            authListener?.unsubscribe();
        };
    }, []);

    return (
        <>
            <Auth.UserContextProvider supabaseClient={supabaseClient}>
                <Switch>
                    <Route path="/" exact>
                        <Container supabaseClient={supabaseClient}>
                            <Redirect to="/login"/>
                        </Container>
                    </Route>
                    <ProtectedRoute path="/protected" component={Dashboard}/>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>

            </Auth.UserContextProvider>
        </>
    );
}

export default App;
