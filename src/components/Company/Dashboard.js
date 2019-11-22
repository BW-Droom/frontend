import React, { useState } from "react";
import { Route } from "react-router-dom";
import JobList from "./JobList";
import ListingForm from "./JobListingForm";
import UpdateJobs from './UpdateJobs';


// Company swipes thru job seekers

function CompanySwiping() {
    return(
        <>
        <Route exact path="/company/" component={JobList} />
      <Route 
        path='/update-job/:id' 
        render={props => {
        return <UpdateJobs {...props}/>}}  />
      <Route
        path="/jobs/:id"
        render={props => {
          return <ListingForm {...props} />;     
        }}
      />
      </>
    )
}

export default CompanySwiping