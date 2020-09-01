import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { List } from "../src/components";
import { Pagination } from "@material-ui/lab";
import { getList } from "../src/redux/movie/movie.action";

const PAGE_SIZE = 10;

const useStyles = makeStyles((theme) => ({
  paginationRoot: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 20,
  },
}));
const Home = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { data, page, totalResults } = useSelector((state) => state.movie);

  const count = useMemo(() => Math.ceil(totalResults / PAGE_SIZE), [
    totalResults,
  ]);
  return (
    <>
      <List data={data} />

      {count > 1 && (
        <Pagination
          onChange={(e, pageNumber) => dispatch(getList(pageNumber))}
          count={count}
          page={page}
          variant="outlined"
          shape="rounded"
          classes={{ root: classes.paginationRoot }}
        />
      )}
    </>
  );
};
export default Home;
