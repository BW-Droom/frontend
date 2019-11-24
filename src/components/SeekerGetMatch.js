import React, { useEffect, useState } from "react";
import MatchPage from './JobSeeker/MatchPage';
import api from '../utils/api';

// import Job from './Company/Job/Job';

// Job Seeker sees the Comapnies they have paired with


function SeekerGetMatch(props) {

    const id = props.job_seeker_id;

    const [seekersMatches, setNewSeekersMatches]= useState({
        "job_seeker_id": '',
        "company_id": '',
        "job_id": '',
        "quality": '',
        "id": '',
        "company_name": '',
        "company_email": '',
        "password": '',
        "location": '',
        "phone_number": '',
        "job_title": '',
        "description": ''
    })

    useEffect(() => {
        
        api().get(`/api/seeker/${id}/match/`) 
        .then((response) => {
            console.log(response.data)
            setNewSeekersMatches(response.data)      
            console.log(seekersMatches)
        })
        .catch((error) => 
            error.response.message,
            // console.log('Network request was unsuccesful'),
        )
        
        },[]);


    return(
        <>
            <h1>Your Company Matches</h1>

            {seekersMatches.map(company => (
                <MatchPage key={seekersMatches.company_id} seekersMatches={company}/> 
            )
             )}
       
        </>
    )
}

export default SeekerGetMatch;

