import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { getList, getOne } from "../../src/redux/movie/movie.action";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  poster: {
    width: "100%",
  },
}));
const SingleMovie = (props) => {
  const classes = useStyles();
  const { movieDetail } = props;
  console.log(movieDetail);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src={movieDetail.Poster} className={classes.poster}></img>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" gutterBottom>
            {movieDetail.Title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Released Date:</b> {movieDetail.Released}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Genre:</b> {movieDetail.Genre}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Production:</b> {movieDetail.Production}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            <b>Director:</b> {movieDetail.Director}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Actors:</b> {movieDetail.Actors}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>IMDB Rating:</b> {movieDetail.imdbRating}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {movieDetail.Plot}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
SingleMovie.getInitialProps = async ({ store, query }) => {
  const { imdbID } = query;

  const movieDetail = (await store.dispatch(getOne(imdbID))).data;
  return { movieDetail };
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getOne: () => dispatch(getOne()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
