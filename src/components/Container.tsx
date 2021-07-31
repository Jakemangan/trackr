// @ts-ignore
import {Button} from "@supabase/ui";
import { Auth } from "@supabase/ui";
import {Router} from "react-router";
import { Link } from "react-router-dom";

// @ts-ignore
export default function Container(props) {
    const {user} = Auth.useUser();

    if (user)
        return (
            <>
                <h1>Hello {user.user_metadata.full_name}!</h1>
                <Link to="/protected">Protected</Link>
                <Button onClick={() => props.supabaseClient.auth.signOut()}>
                    Sign out
                </Button>
            </>
        );
    return props.children;
}
