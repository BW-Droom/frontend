import React from 'react';
import Button from '@material-ui/core/Button';

function JobSearch() {
    return(
        <>
            <img src="http://lorempixel.com/400/400/business" />
            <form>
                <h1>Job Title</h1>
                
                <br></br>
                <Button type='submit' variant='contained' color='primary'>Search</Button>
            </form>
        </>
    )
}

export default JobSearch