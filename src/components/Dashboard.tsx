import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";
import 'firebase/auth';
import {Redirect} from "react-router-dom";
import {useFirebaseAuth} from "../context/Context";

export default function Dashboard(props){
    const auth = firebase.auth();
    const user = useFirebaseAuth();

    let userIsLogged = localStorage.getItem("userIsLogged");

    console.log("Dashboard");
    if(!userIsLogged){
        return (
            // <h4>Not logged</h4>
            <Redirect to="/login"/>
        )
    }

    if(!user){
        return <h4>Loading...</h4>
    } else {
        return (
            <>
                <h1>Dashboard</h1>
                <h4>{auth.currentUser?.displayName}</h4>
                <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            </>
        )
    }


}
