import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import MyLoader from "./Skeleton";
import { setActiveCategory } from "../../redux/slices/filterSlice";
import { useGetCategoriesQuery } from "../../redux/slicesApi/fetchData";

import { Container, H2, Text } from "../../globalStyles";
import { Wrap, Grid, Card, Image, Svg, Caption } from "./Categories.styled";

const Categories = () => {
  const { data: categoriesData, isSuccess: categoriesIsLoaded } =
    useGetCategoriesQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCklickCategory = (id) => {
    dispatch(setActiveCategory(id));
    navigate("/marketplace");
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Wrap>
        <H2>Browse Categories</H2>
        <Grid>
          {categoriesIsLoaded
            ? categoriesData.record.map((category) => (
                <Card
                  key={category.id}
                  onClick={() => onCklickCategory(category.id)}
                >
                  <Image src={category.img} />
                  <Svg src={category.svg} />
                  <Caption>
                    <Text>{category.title}</Text>
                  </Caption>
                </Card>
              ))
            : [...Array(8)].map((_, index) => <MyLoader key={index} />)}
        </Grid>
      </Wrap>
    </Container>
  );
};

export default Categories;
