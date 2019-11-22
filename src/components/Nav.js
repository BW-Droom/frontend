import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"
import Signup from './SignUp';
import Signin from './Login';
import SeekerSwiping from './JobSeeker/Dashboard';
import CompanySwiping from './Company/Dashboard';
import ListingForm from './Company/JobListingForm';
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

            {signedIn && <Link to='/seeker/dashboard'>Dashboard</Link>}
            {signedIn && <Link to='/seeker/matches'>Your Matches</Link>}
            {signedIn && <Link to='/seeker/dreamjob'>Dream Job</Link>}
            {signedIn && <Link to='/seeker/account'>Account</Link>}

            {signedIn && <Link to='/company/dashboard'>Dashboard</Link>}
            {signedIn && <Link to='/company/matches'>Your Matches</Link>}
            {signedIn && <Link to='/company/listing'>Create a Listing</Link>}

            {!signedIn && <Link to='/signin'>Sign in</Link>}
            {!signedIn && <Link to='/signup'>Sign up</Link>}
            {signedIn && <Link to='/seeker/logout'>Log Out</Link>}
            {signedIn && <Link to='/company/logout'>Log Out</Link>}
        </nav>

        </div>
        
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />      

        <ProtectedRouteE exact path='/seeker/dashboard' component={SeekerSwiping} />
        <ProtectedRouteE exact path='/seeker/matches' component={JobSeekerMatches} />
        <ProtectedRouteE exact path='/seeker/account' component={Account} />
        <ProtectedRouteE exact path='/seeker/dreamjob' component={SeekerForm} />


        <ProtectedRouteR exact path='/company/dashboard' component={CompanySwiping} />
        <ProtectedRouteR exact path='/company/matches' component={CompanyMatches} />
        <ProtectedRouteR exact path='/company/listing' component={ListingForm} />

        <ProtectedRouteR exact path='/company/logout' component={Logout} />
        <ProtectedRouteE exact path='/seeker/logout' component={Logout} />

        </>
    )
}

export default withRouter(Nav)