import React, { useEffect } from "react";
import { connect } from "react-redux";

import { List } from "../../src/components";
import { getList } from "../../src/redux/movie/movie.action";

const Home = (props) => {
  const { movie, getList } = props;

  return <List data={movie?.data?.Search} />;
};
// Home.getInitialProps = async ({ store, isServer }) => {
//   await store.dispatch(getList());
//   return { isServer };
// };

// const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => ({
//   getList: () => dispatch(getList()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
