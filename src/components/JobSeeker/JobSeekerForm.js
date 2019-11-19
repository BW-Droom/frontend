import React from 'react';

function SeekerForm() {
    return (
        <>
        <form>
            <h1>Find Your Dream Job</h1>
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

export default SeekerForm