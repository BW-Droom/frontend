import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"
import Signup from './SignUp';
import Signin from './Login';
import SeekerSwiping from './JobSeeker/Dashboard';
import Account from './Account';
import { getToken } from '../utils/api';
import { ProtectedRoute } from '../utils/ProtectedRoute';
import Logout from './logout';
import JobSeekerMatches from './JobSeeker/MatchPage';
import CompanySwiping from './Company/Dashboard';
import ListingForm from './Company/Job/JobListingForm';
import CompanyMatches from './Company/MatchPage';
import EditACC from './JobSeeker/EditAccount';

function Nav(props) {
    const signedIn = getToken()
    const seeker = localStorage.getItem('seeker')
    const company = localStorage.getItem('company')
    const id = props.match.params.id

    return(
        <>
        <div className='navWrapper'>
        <div className='Logo'>
          <h1 className='title'>Droom</h1>
          <p className='slogan'>Swipe for your check</p>
        </div>

        <nav>
            {!signedIn && <Link to='/'>Home</Link>}

            {seeker && signedIn && <Link to='/seeker/dashboard'>Dashboard</Link>}
            {seeker && signedIn && <Link to='/seeker/matches'>Your Matches</Link>}
            {seeker && signedIn && <Link to={`/seeker/account/${id}`}>Account</Link>}

            {company && signedIn && <Link to='/company/dashboard'>Dashboard</Link>}
            {company && signedIn && <Link to='/company/matches'>Your Matches</Link>}
            {company && signedIn && <Link to='/company/listing'>Create a Listing</Link>}

            {!signedIn && <Link to='/signin'>Sign in</Link>}
            {!signedIn && <Link to='/signup'>Sign up</Link>}
            {signedIn && <Link to='/logout'>Log Out</Link>}
        </nav>

        </div>
        
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />      

        <ProtectedRoute exact path='/seeker/dashboard' component={SeekerSwiping} />
        <ProtectedRoute exact path='/seeker/matches' component={JobSeekerMatches} />
        <ProtectedRoute path='/seeker/account/:id' component={Account} />
        <ProtectedRoute exact path='/seeker/edit/:id' component={EditACC} />

        <ProtectedRoute exact path='/company/dashboard' component={CompanySwiping} />
        <ProtectedRoute exact path='/company/matches' component={CompanyMatches} />
        <ProtectedRoute exact path='/company/listing' component={ListingForm} />

        <ProtectedRoute exact path='/logout' component={Logout} />
        </>
    )
}

export default withRouter(Nav)