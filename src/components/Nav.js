import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"
import Signup from './SignUp';
import Signin from './Login';
import SeekerSwiping from './JobSeeker/Dashboard';
import CompanySwiping from './Company/Dashboard';
import ListingForm from './Company/JobListingForm';
import JobSearch from './JobSeeker/JobSeeking';
import Account from './Account';
import { getToken } from '../utils/api';
import ProtectedRoute from '../utils/ProtectedRoute';
import SearchEmployees from './Company/NewEmployeeSearch';
import SeekerForm from './JobSeeker/JobSeekerForm';
import MainPage from './MainPage';
import Logout from './logout';

function Nav(props) {
    const signedIn = getToken()
    const seeker = props.type === 'employee'
    const company = props.type === 'employer'

    return(
        <>
        <div className='navWrapper'>
        <div className='Logo'>
          <h1 className='title'>Droom</h1>
          <p className='slogan'>Swipe for your check</p>
        </div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/signin'>Sign in</Link>
            <Link to='/signup'>Sign up</Link>
            {seeker && signedIn && <Link to='/seeker/dashboard'>Job-Seeker Swiping</Link>}
            {seeker && signedIn && <Link to='/seeker/search'>Search for Jobs</Link>}
            {seeker && signedIn && <Link to='/seeker/account'>Account</Link>}
            {seeker && signedIn && <Link to='/seeker/dreamjob'>Create a Listing</Link>}
            {company && signedIn && <Link to='/company/search'>Search for Employees</Link>}
            {company && signedIn && <Link to='/company/dashboard'>Company Swiping</Link>}
            {company && signedIn && <Link to='/company/listing'>Create a Listing</Link>}
            {signedIn && <Link to='/logout'>Log Out</Link>}
        </nav>
        </div>
        
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />       
        <ProtectedRoute exact path='/seeker/dashboard' component={SeekerSwiping} />
        <ProtectedRoute exact path='/seeker/search' component={JobSearch} />
        <ProtectedRoute exact path='/seeker/account' component={Account} />
        <ProtectedRoute exact path='/seeker/dreamjob' component={SeekerForm} />
        <ProtectedRoute exact path='/company/search' component={SearchEmployees} />
        <ProtectedRoute exact path='/company/dashboard' component={CompanySwiping} />
        <ProtectedRoute exact path='/company/listing' component={ListingForm} />
        <ProtectedRoute exact path='/logout' component={Logout} />
        </>
    )
}

export default withRouter(Nav)