import React from 'react';
import ListingList from './Listings';

// Company creates and removes job listings

function ListingForm() {
    return (
        <>
        <form>

            <h1>Create a listing</h1>
            <div>
                <h3>Current Listings</h3>
                <ListingList />
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