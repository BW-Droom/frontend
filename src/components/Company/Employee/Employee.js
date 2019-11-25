import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

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

export default function Employee(props) {
  const classes = useStyles();

  return (
    <div>

<SwipeableList threshold={0.25} className='swipingContainer'>
  <SwipeableListItem
  className='swipingContainer'
    swipeLeft={{
      content: <h1 className='noMatch'>This is not a match</h1>,
      action: () => console.info('swipe action triggered')
    }}
    swipeRight={{
      content: <h1 className='match'>This is a match</h1>,
      action: () => alert("sent to your matches")
    }}
  >
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
      <CardActions className="actionButton">
        <Button  className="xButton" size="large" color="primary">
        <img className="xButton" src="https://www.trzcacak.rs/myfile/full/51-515377_x-mark-transparent-background-png-x.png" alt="xmate" />
        </Button>
        <Button className="checkButton" size="large" color="primary">
        <img className="checkButton" src="https://www.pinclipart.com/picdir/big/105-1056029_checkmark-clipart-black-and-white-images-free-download.png" alt="checkmate" />
        </Button>
      </CardActions>
    </Card>
  </SwipeableListItem>
</SwipeableList>
    
    </div>
    
  );
}
