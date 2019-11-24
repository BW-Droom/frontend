// import React from "react";


// function Employee(props) {
//   //console.log('rendering')

//   return (
//     <>
//         <div className='swipingCard' >
//           Name: {props.employee.name} <br />   
//           Email: {props.employee.email} <br/>       
//           Experience: {props.employee.experience} <br/><br/>    
//         </div>
//     </>
//   );
// }

// export default Employee
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    margin: 'auto', 
    marginBottom: 15


  },
  media: {
    height: 140,
  },
});

export default function Employee(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://loremflickr.com/320/240'
          title="Employee"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.employee.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.employee.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.employee.experience}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {'\u274C'}
        </Button>
        <Button size="small" color="primary">
        {'\u2714'}
        </Button>
      </CardActions>
    </Card>
  );
}
