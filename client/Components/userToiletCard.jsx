import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// schema is:
// bathroomId,
// bathroomCoords,
// imageUrl,
// imageTitle,
// descriptionTitle,
// descriptionBody,
// toiletAddress
// toiletAddress2
// export default function UserToiletCard (props) {
 

    // return (
    //   <div className={classes.card}>
    //   <img src={imageUrl} />
    //   <div>{imageTitle}</div>
    //   <h3>{descriptionTitle}</h3>
    //   <p>{descriptionBody}</p>
    //   <div>{toiletAddress}</div>
    //   <div>{toiletAddress2}</div>
    //   <Button>  </Button>
    //   </div>      
    // )

  export default function ToiletCard (props) {
   
    const {
      imageUrl,
      imageTitle,
      descriptionTitle,
      descriptionBody,
      toiletAddress,
      toiletAddress2} = props.bathroom;
  
      console.log(`props.bathroom of tempToiletCard is ${JSON.stringify(props.bathroom, null, 2)}`);
  
      console.log(`descriptionBody is ${descriptionBody}`)
  
      const useStyles = makeStyles({
        card: {
          display: 'grid',
          placeItems: 'center',
          maxWidth: 245,
          height: 145,
        },
      });
  
      const classes = useStyles();

    return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={imageTitle}
          height="140"
          image={imageUrl}
          title={imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {descriptionTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descriptionBody}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Reserve
        </Button>
      </CardActions>
    </Card>
    )
}