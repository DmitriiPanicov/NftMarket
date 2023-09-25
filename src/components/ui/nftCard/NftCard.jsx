import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImage,
  InfoBlock,
  CardTitle,
  ArtistBlock,
  Icon,
  Name,
  AdditionalInfoBlock,
} from "./NftCard.styled";
import AppContext from "../../../context";

function NftCard({ nftCard }) {
  const navigate = useNavigate();
  const { artists } = React.useContext(AppContext);
  const heandleClick = () => {
    navigate(`/nft/${nftCard.id}`);
    window.scroll(0, 0);
  };

  return (
    <Card onClick={() => heandleClick()}>
      <CardImage src={nftCard.imageUrl} />
      <InfoBlock>
        <CardTitle>{nftCard.title}</CardTitle>
        <ArtistBlock>
          <Icon
            src={
              artists.filter((artist) => artist.id === nftCard.artistId)[0]
                .imageUrl
            }
          />
          <Name>
            {artists.filter((artist) => artist.id === nftCard.artistId)[0].name}
          </Name>
        </ArtistBlock>
        <AdditionalInfoBlock>
          <div>
            <p>Price</p>
            <p>{nftCard.price} ETH</p>
          </div>
          <div>
            <p>Highest Bid</p>
            <p>{nftCard.bid} wETH</p>
          </div>
        </AdditionalInfoBlock>
      </InfoBlock>
    </Card>
  );
}

export default NftCard;
