import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function ProtectedRoute(props) {

    const {
        componet: Componet,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token") && (props.type === 'employee')) {
                return <Componet {...renderProps} />
            } else {
                return <Redirect to="/signin" />
            }
        }} />
    )
}

export default ProtectedRoute;