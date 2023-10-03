import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/ui/loader/Loader";
import { setActiveCategory } from "../../redux/slices/filterSlice";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import GridOfCards from "../../components/ui/gridOfCards/GridOfCards";
import {
  useGetCategoriesQuery,
  useGetArtistsQuery,
  useGetNftsQuery,
} from "../../redux/slicesApi/fetchData";

import { Container, H1, Text } from "../../globalStyles";
import { Wrap, Header, Categories, Category, Hr } from "./Marketplace.styled";

function Marketplace() {
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const [value, setValue] = React.useState("");
  const { data: categoriesData, isSuccess: categoriesIsLoaded } =
    useGetCategoriesQuery();
  const { isSuccess: artistsIsLoaded } = useGetArtistsQuery();
  const { data: nftsData, isSuccess: nftsIsLoaded } = useGetNftsQuery();

  const dispatch = useDispatch();

  const filterNftCards = () => {
    return (
      activeCategory
        ? nftsData.record.filter(
            (nftCards) => nftCards.category === activeCategory
          )
        : nftsData.record
    ).filter((nftCards) =>
      nftCards.title.toLowerCase().includes(value.toLowerCase())
    );
  };

  const filtredCards = nftsIsLoaded ? filterNftCards() : null;

  return (
    <Wrap>
      <Container>
        <Header>
          <H1>Browse Marketplace</H1>
          <Text>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
          <SearchBlock value={value} setValue={setValue} />
        </Header>
      </Container>
      <Hr />
      {nftsIsLoaded && artistsIsLoaded && categoriesIsLoaded ? (
        <Container>
          <Categories>
            {categoriesData.record.map((item) => (
              <Category
                onClick={() => dispatch(setActiveCategory(item.id))}
                key={item.id}
                className={activeCategory === item.id ? "active" : ""}
              >
                {item.title}
              </Category>
            ))}
          </Categories>
          <GridOfCards cards={filtredCards}></GridOfCards>
        </Container>
      ) : (
        <Loader />
      )}
    </Wrap>
  );
}

export default Marketplace;
