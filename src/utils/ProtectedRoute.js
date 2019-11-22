import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function ProtectedRouteR(props) {

    const {
        componet: Componet,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token") && localStorage.getItem('company')) {
                return <Componet {...renderProps} />
            } else {
                return <Redirect to="/signin" />
            }
        }} />
    )
}

export function ProtectedRouteE(props) {

    const {
        componet: Componet,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token") && localStorage.getItem('seeker')) {
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