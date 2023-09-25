import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TableStyled,
  TableHead,
  TableBody,
  CaptionIndex,
  CaptionArtist,
  CaptionChange,
  CaptionsSold,
  CaptionVolume,
  ArtistRow,
  Icon,
  Name,
  Index,
  Sold,
  Value,
  Change,
} from "./Table.styled";

function Table({ sortedArtists }) {
  const navigate = useNavigate();

  return (
    <TableStyled>
      <TableHead>
        <CaptionIndex>#</CaptionIndex>
        <CaptionArtist>Artist</CaptionArtist>
        <CaptionChange>Change</CaptionChange>
        <CaptionsSold>NFTs Sold</CaptionsSold>
        <CaptionVolume>Volume</CaptionVolume>
      </TableHead>
      <TableBody>
        {sortedArtists.map((artist, index) => (
          <ArtistRow
            onClick={() => navigate(`/artist/${artist.id}`)}
            key={index}
          >
            <Index>{index + 1}</Index>
            <Icon src={artist.imageUrl} />
            <Name>{artist.name}</Name>
            <Change change_in_sales={artist.change_in_sales}>
              {artist.change_in_sales > 0
                ? `+${artist.change_in_sales}`
                : artist.change_in_sales}
              %
            </Change>
            <Sold>{artist.nfts_sold.toString().padStart(3, "0")}</Sold>
            <Value>{artist.volume} ETH</Value>
          </ArtistRow>
        ))}
      </TableBody>
    </TableStyled>
  );
}

export default Table;

