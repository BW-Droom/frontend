import React from 'react';
import { Link, Route, withRouter, Switch } from "react-router-dom"
import Signup from './SignUp';
import Signin from './Login';
import SeekerSwiping from './JobSeeker/Dashboard';
import CompanySwiping from './Company/Dashboard';
import ListingForm from './Company/JobListingForm';
import JobSearch from './JobSeeker/JobSeeking';
import Account from './Account';
import { getToken } from '../utils/api';
import { ProtectedRouteE, ProtectedRouteR } from '../utils/ProtectedRoute';
import SeekerForm from './JobSeeker/JobSeekerForm';
import Logout from './logout';
import CompanyMatches from './Company/MatchPage';
import JobSeekerMatches from './JobSeeker/MatchPage';

function Nav(props) {
    const signedIn = getToken()

    return(
        <>
        <div className='navWrapper'>
        <div className='Logo'>
          <h1 className='title'>Droom</h1>
          <p className='slogan'>Swipe for your check</p>
        </div>
        <nav>
                {!signedIn && <Link to='/'>Home</Link>}
                {!signedIn && <Link to='/signin'>Sign in</Link>}
                {!signedIn && <Link to='/signup'>Sign up</Link>}
                {signedIn && <Link to='/seeker/dashboard'>Job-Seeker Swiping</Link>}
                {signedIn && <Link to='/seeker/search'>Search for Jobs</Link>}
                {signedIn && <Link to='/seeker/account'>Account</Link>}
                {signedIn && <Link to='/seeker/dreamjob'>Dream Job</Link>}
                {signedIn && <Link to='/company/dashboard'>Company Swiping</Link>}
                {signedIn && <Link to='/company/listing'>Create a Listing</Link>}
                {signedIn && <Link to='/company/matches'>Your Matches</Link>}
                {signedIn && <Link to='/seeker/matches'>Your Matches</Link>}
                {signedIn && <Link to='/logout'>Log Out</Link>}
        </nav>
        </div>
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />       
                <ProtectedRouteE path='/seeker/dashboard' component={SeekerSwiping} />
                <ProtectedRouteE path='/seeker/search' component={JobSearch} />
                <ProtectedRouteE path='/seeker/account' component={Account} />
                <ProtectedRouteE path='/seeker/dreamjob' component={SeekerForm} />
                <ProtectedRouteR path='/company/dashboard' component={CompanySwiping} />
                <ProtectedRouteR path='/company/listing' component={ListingForm} />
                <ProtectedRouteR path='/company/matches' component={CompanyMatches} />
                <ProtectedRouteR path='/seeker/matches' component={JobSeekerMatches} />
                <Route exact path='/logout' component={Logout} />      
        </>
    )
}

export default withRouter(Nav)