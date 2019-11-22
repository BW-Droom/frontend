import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export function ProtectedRouteE(props) {

    const {
        componet: Componet,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token") && props.type === 'employee') {

                return <Componet {...renderProps} />
            } else {
                return <Redirect to="/signin" />
            }
        }} />
    )
}

export function ProtectedRouteR(props) {

    const {
        componet: Componet,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token") && props.type === 'employer') {
                return <Componet {...renderProps} />
            } else {
                return <Redirect to="/signin" />
            }
        }} />
    )
}

export function ProtectedRoute(props) {

    const {
        componet: Componet,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token")) {
                return <Componet {...renderProps} />
            } else {
                return <Redirect to="/signin" />
            }
        }} />
    )
}