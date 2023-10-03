import React, { useEffect } from "react";

import Table from "../../components/ui/Table/Table";
import Loader from "../../components/ui/loader/Loader";
import { useGetArtistsQuery } from "../../redux/slicesApi/fetchData";

import { Container, H1, Text } from "../../globalStyles";
import { Wrap, SortCategories, SortList } from "./Rnaking.styled";

function Ranking() {
  const sortCategories = ["Artist", "Change", "NFTs Sold", "Volume"];
  const _ = require("lodash");

  const { data: artistsData, isSuccess: artistsIsLoaded } = useGetArtistsQuery();

  const [sortFilter, setSortFilter] = React.useState(2);
  const [sortType, setSortType] = React.useState(true);
  const previousValue = React.useRef(null);

  useEffect(() => {
    previousValue.current = sortFilter; //была ли нажата категория несколько раз подряд(менять asc на desc)
  }, [sortFilter]);

  function toSort(artists) {
    if (sortFilter === 0) {
      return _.orderBy(artists, "name", sortType ? "desc" : "asc");
    } else if (sortFilter === 1) {
      return _.orderBy(artists, "changeInSales", sortType ? "asc" : "desc");
    } else if (sortFilter === 2) {
      return _.orderBy(artists, "nftsSold", sortType ? "asc" : "desc");
    } else {
      return _.orderBy(artists, "volume", sortType ? "asc" : "desc");
    }
  }

  const renderArtists = (artists) => {
    const sortedArtists = toSort(artists);
    return <Table sortedArtists={sortedArtists} />;
  };

  const onClickSortList = (index) => {
    setSortFilter(index);
    if (previousValue.current === index) {
      setSortType((prev) => !prev);
    }
  };

  const renderSortList = (item, index) => {
    return sortFilter === index
      ? sortType
        ? `${item} ↓`
        : `${item} ↑`
      : `${item}`;
  };

  return (
    <Container>
      <Wrap>
        <H1>Top Creators</H1>
        <Text>Check out top ranking NFT artists on the NFT Marketplace.</Text>
        <SortCategories>
          {sortCategories.map((item, index) => (
            <SortList
              onClick={() => onClickSortList(index)}
              key={index}
              className={sortFilter === index ? "active" : ""}
            >
              {renderSortList(item, index)}
            </SortList>
          ))}
        </SortCategories>
        {artistsIsLoaded ? renderArtists(artistsData.record) : <Loader />}
      </Wrap>
    </Container>
  );
}

export default Ranking;
