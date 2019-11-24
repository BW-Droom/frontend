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
      action: () => console.info('swipe action triggered')
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
      <CardActions>
        <Button size="small" color="primary">
        {'\u274C'}
        </Button>
        <Button size="small" color="primary">
        {'\u2714'}
        </Button>
      </CardActions>
    </Card>
  </SwipeableListItem>
</SwipeableList>
    
    </div>
    
  );
}
