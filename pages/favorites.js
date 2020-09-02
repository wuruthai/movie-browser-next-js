import React from "react";
import { useSelector } from "react-redux";

import { List } from "../src/components";

const Favorites = (props) => {
  const { favoriteList = [] } = useSelector((state) => state.favorite);

  return <List data={favoriteList} />;
};
export default Favorites;
