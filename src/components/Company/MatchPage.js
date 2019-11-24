import React, { useEffect, useState } from "react";
import SeekerGetMatch from '../SeekerGetMatch';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CompanyGetMatch from '../CompanyGetMatch';

// import Job from './Company/Job/Job';

// Company sees the job seekers they have paired with

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

function CompanyMatches(props) {
    console.log(props)

    const classes = useStyles();

    return(
        <>
        <h1>Your Matches</h1>
        <CompanyGetMatch />

        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {/* {props.companyMatches.phone_number} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {/* {props.companyMatches.description} */}
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export default CompanyMatches;