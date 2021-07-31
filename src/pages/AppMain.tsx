import React from "react";
import Container from "../components/Container";
import supabaseClient from "../utils/supabaseClient";
import {Button} from "@supabase/ui";
import signIn from "../utils/signIn";
import "./AppMain.scss";

class AppMain extends React.Component<any, any> {
    render() {
        // return <Container supabaseClient={supabaseClient}>
        //     <Button onClick={() => signIn(supabaseClient)}>Log in</Button>
        // </Container>
        return <>
            <div>
                <div className={"header"}>Header</div>
            </div>
        </>
    }
}

export default AppMain;
