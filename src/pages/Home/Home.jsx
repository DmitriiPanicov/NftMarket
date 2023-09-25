import React from "react";
import {Wrap} from './Home.styled'

import Description from "../../components/Descriprion/Description";
import TopArtists from "../../components/TopArtists/TopArtists";
import Categories from "../../components/Categories/Categories";
import Nfts from "../../components/Nfts/Nfts";
import DailyNft from "../../components/DailyNft/DailyNft";
import Info from "../../components/Info/Info";
import Subscribe from '../../components/Subscribe/Subscribe'

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
