import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {},
  cardContent: {
    flexGrow: 1,
  },
}));

const Item = ({ Title, Poster, Year }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        {Poster !== "N/A" && (
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={Poster}
          />
        )}
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="subtitle1" component="h3">
            {Title}
          </Typography>
          <Typography component="p">
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Item;
