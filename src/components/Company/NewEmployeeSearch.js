import React from 'react';

function SearchEmployees() {
    return(
        <>
            <form>
                <select>
                    <option value='jobType'>This</option>
                    <option value='jobType'>Will</option>
                    <option value='jobType'>Be</option>
                    <option value='jobType'>Jobs</option>
                    <option value='jobType'>You</option>
                    <option value='jobType'>Posted</option>
                </select>
                <br />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default SearchEmployees