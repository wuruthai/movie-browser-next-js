import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "./Item";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const List = ({ cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cardList.map((item) => (
          <Card />
        ))}
      </Grid>
    </Container>
  );
};

export default List;
