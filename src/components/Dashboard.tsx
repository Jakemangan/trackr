import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";
import 'firebase/auth';
import {Redirect} from "react-router-dom";

export default function Dashboard(props){
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    if(user){
        return (
            <Redirect to="/login"/>
        )
    }

    return (
        <>
            <h1>Dashboard</h1>
            <h4>{auth.currentUser?.displayName}</h4>
        </>
    )
}
