import React from "react";

import NftCard from "../nftCard/NftCard";
import useColumnsRender from "../../../hooks/useColumnsRender";

import { Cards, CardsLine } from "./GridOfCards.styled";

const GridOfCards = ({cards}) => {
  const [columns, setColumns] = React.useState(4);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const res = useColumnsRender(cards, columns);

  React.useEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
  });

  React.useEffect(() => {
    if (innerWidth > 1279) {
      setColumns(4);
    } else if (innerWidth > 834 && innerWidth <= 1279) {
      setColumns(3);
    } else if (innerWidth > 560 && innerWidth <= 834) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  }, [innerWidth]);

  return (
    <Cards columns={columns}>
      {res.map((column, index) => (
        <CardsLine key={index}>
          {column.map((nftCard) => (
            <NftCard nftCard={nftCard} key={nftCard.id} />
          ))}
        </CardsLine>
      ))}
    </Cards>
  );
};

export default GridOfCards;
