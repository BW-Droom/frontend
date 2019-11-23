import React from 'react';
import { Redirect } from 'react-router-dom';

function Logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("seeker")
    localStorage.removeItem("company")

    return <Redirect to='/signin' />
}

export default Logout