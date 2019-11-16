import React from 'react';
import SearchEmployees from './Company/NewEmployeeSearch';

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

            <SearchEmployees />
        </>
    )
}

export default SearchEmployees