import React, { useMemo, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Item = ({ onView, isFavorited, onFavorite, item }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={
            item.Poster === "N/A"
              ? "https://parisaksesuar.com.tr/wp-content/uploads/2018/03/placehold.it-300x450-3.jpg"
              : item.Poster
          }
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle1" component="h3">
            {`${item.Title} - ${item.Year}`}
          </Typography>
          {/* <Typography component="p">
            This is a media card. You can use this section to describe the
            content.
          </Typography> */}
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => onFavorite(item, isFavorited)}
          >
            <FavoriteIcon color={isFavorited ? "secondary" : "inherit"} />
          </IconButton>
          <IconButton aria-label="View" onClick={() => onView(item)}>
            <VisibilityIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
