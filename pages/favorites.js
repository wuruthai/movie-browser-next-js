import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";

import { List } from "../src/components";

const Favorites = (props) => {
  const { favoriteList = [] } = useSelector((state) => state.favorite);

  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <List data={favoriteList} />
    </>
  );
};
export default Favorites;
