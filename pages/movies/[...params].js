import React, { useEffect } from "react";
import { connect } from "react-redux";

import { List } from "../../src/components";
import { getList } from "../../src/redux/movie/movie.action";

const Home = (props) => {
  const { movie, getList } = props;

  return <List data={movie?.data?.Search} />;
};
Home.getInitialProps = async ({ store, query, isServer }) => {
  const [search] = query.params;
  await store.dispatch(getList({ search }));
  return { isServer };
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
