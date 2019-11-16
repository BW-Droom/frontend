import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"
import Signup from './SignUp';
import Signin from './Login';
import SeekerSwiping from './JobSeeker/Dashboard';
import CompanySwiping from './Company/Dashboard';
import ListingForm from './Company/JobListingForm';
import SearchEmployees from './Company/NewEmployeeSearch';
import JobSearch from './JobSeeker/JobSeeking';
import Account from './Account';
import { getToken } from '../utils/api';
import ProtectedRoute from '../utils/ProtectedRoute';


function Nav() {
    const signedIn = getToken()
    return(
        <>
        <div className='navWrapper'>
        <div className='Logo'>
          <h1 className='title'>Droom</h1>
          <p className='slogan'>Swipe for your check</p>
        </div>
        <nav>
            <Link to='/signin'>Sign in</Link>
            <Link to='/signup'>Sign up</Link>
            {signedIn && <Link to='/seeker/dashboard'>Job-Seeker Swiping</Link>}
            {signedIn && <Link to='/seeker/search'>Search for Jobs</Link>}
            {signedIn && <Link to='/seeker/account'>Account</Link>}
            {signedIn && <Link to='/company/search'>Search for Employees</Link>}
            {signedIn && <Link to='/company/dashboard'>Company Swiping</Link>}
            {signedIn &&<Link to='/company/listing'>Create a Listing</Link>}
        </nav>
        </div>
        
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <ProtectedRoute exact path='/seeker/dashboard' component={SeekerSwiping} />
        <ProtectedRoute exact path='/seeker/search' component={JobSearch} />
        <ProtectedRoute exact path='/seeker/account' component={Account} />
        <ProtectedRoute exact path='/company/search' component={SearchEmployees} />
        <ProtectedRoute exact path='/company/dashboard' component={CompanySwiping} />
        <ProtectedRoute exact path='/company/listing' component={ListingForm} />
        </>
    )
}

export default withRouter(Nav)