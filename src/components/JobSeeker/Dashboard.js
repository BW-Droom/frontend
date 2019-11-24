import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function SeekerSwiping() {
    return(
        <>

        <img src="http://lorempixel.com/400/400/business" alt='random' /> {/* random image */}
            
            <form>
                <h1>Job Title</h1>
                <p>Description</p>
                <p>Requirements</p>
                <ButtonGroup
                    color="secondary"
                    size="large"
                    aria-label="large outlined secondary button group"
                >
                <Button type='submit' variant='contained'>X</Button>
                <Button type='submit' variant='contained' color='primary'>Search</Button>
                <Button type='submit' variant='contained' color='secondary'>✓</Button>
                </ButtonGroup>
            </form>
        </>
    )
}
export default SeekerSwiping