import React from 'react';

// Company creates and removes job listings

function ListingForm() {
    return (
        <>
        <form>
            <h1>Create a listing</h1>
            <div>
                <h3>Current Listings</h3>
                <h4>joblisting.map(eventually)</h4>
                <h4>joblisting.map(eventually)</h4>
                <h4>joblisting.map(eventually)</h4>
            </div>
            <input type='text' name='title' placeholder='Job Title' />
            <br />
            <textarea name='description' placeholder='Description'></textarea>
            <br />
            <textarea name='requirements' placeholder='Requirements'></textarea>
            <br />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default ListingForm