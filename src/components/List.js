import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Item";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";

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
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {data.map((item) => (
          <Card
            item={item}
            onView={() => {
              router.push(`/movies/${item.imdbID}`);
            }}
            onFavorite={() => {}}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default List;
