import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 200,
  },
  action: {
    justifyContent: 'center',
    padding: theme.spacing(0),
  }, 
  button: {
    width: '100%',
    height: '100%',
    color: "#0077b6"
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { image, name } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" noWrap={true}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Button className={classes.button} color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
