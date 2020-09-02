import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Item";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/favorite/favorite.action";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const List = ({ data = [] }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const { favoriteList = [] } = useSelector((state) => state.favorite);
  const isFavorited = useCallback(
    (item) => favoriteList.some((fav) => fav.imdbID === item.imdbID),
    [favoriteList]
  );

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {data.map((item) => (
          <Card
            item={item}
            isFavorited={isFavorited(item)}
            onView={() => {
              router.push(`/movies/${item.imdbID}`);
            }}
            onFavorite={(favoriteItem, isFavorite) => {
              isFavorite
                ? dispatch(removeFromFavorites(favoriteItem))
                : dispatch(addToFavorites(favoriteItem));
            }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default List;
