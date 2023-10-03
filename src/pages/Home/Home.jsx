import React from "react";
import {Wrap} from './Home.styled'

import Nfts from "../../components/Nfts/Nfts";
import Info from "../../components/Info/Info";
import DailyNft from "../../components/DailyNft/DailyNft";
import Subscribe from '../../components/Subscribe/Subscribe'
import TopArtists from "../../components/TopArtists/TopArtists";
import Categories from "../../components/Categories/Categories";
import Description from "../../components/Descriprion/Description";

function Home() {

  return (
    <Wrap >
      <Description />
      <TopArtists />
      <Categories />
      <Nfts />
      <DailyNft />
      <Info/>
      <Subscribe/>
    </Wrap>
  );
}

export default Home;
