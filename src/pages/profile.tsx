import React from "react";
import supabaseClient from "../utils/supabaseClient";
import Container from "../components/Container";
import {Button} from "@supabase/ui";
import signIn from "../utils/signIn";

class Profile extends React.Component<any, any> {
    render() {
        return <Container supabaseClient={supabaseClient}>
            <Button onClick={() => signIn(supabaseClient)}>Log in</Button>
        </Container>
    }
}

export default Profile;
