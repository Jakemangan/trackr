import React, {useReducer} from "react";
import firebase from "firebase";

type User = firebase.User | null;
type ContextState = { user: User };

const AuthStateContext = React.createContext<ContextState | undefined>(undefined);

const FirebaseAuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = React.useState<User>(null);
    const value = { user };

    React.useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
        return unsubscribe;
    }, []);

    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    )
}

const useFirebaseAuth = () => {
    const context = React.useContext(AuthStateContext);
    if(context === undefined){
        throw new Error("AuthStateContext must be used within a FirebaseAuthProvider")
    }
    console.log("Returned user: ", context.user);
    return context.user;
}

export { FirebaseAuthProvider, useFirebaseAuth}
