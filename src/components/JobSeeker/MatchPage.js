import React, { useEffect, useState } from "react";
import CompanyGetMatch from './CompanyGetMatch';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import Job from './Company/Job/Job';

// Job Seeker sees the Companies they have paired with

const useStyles = makeStyles({
    card: {
      width: 500,
      margin: 'auto', 
      marginBottom: 25,
      height: 450
  
  
    },
    media: {
      height: 190,
    },
  });

function JobSeekerMatches(props) {
  console.log('jake from state farm', props)

        const classes = useStyles();

    return(
        <>
        <h1>Your Job Matches</h1>
<CompanyGetMatch />
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Company Name: {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.email}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                {props.company.job_title}
                </Typography> */}
            </CardContent>
        </Card>
        </>
    )
}

export default JobSeekerMatches;

