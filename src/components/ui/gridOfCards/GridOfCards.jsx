import React from "react";
import { Cards, CardsLine } from "./GridOfCards.styled";
import useColumnsRender from "../../../hooks/useColumnsRender";
import NftCard from "../nftCard/NftCard";

const GridOfCards = ({cards}) => {
  const [columns, setColumns] = React.useState(4);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const res = useColumnsRender(cards, columns);

  React.useEffect(() => {
    const hh = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", hh);
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
