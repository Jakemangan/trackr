import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {Auth} from "@supabase/ui";


export function ProtectedRoute({ component: Component, ...rest }) {
    const {user} = Auth.useUser();

    return (
        <Route
            {...rest}
            render={(props) => {
                return user ? <Component {...props} /> : <Redirect to="/login"/>
            }}
        />
    )
}
