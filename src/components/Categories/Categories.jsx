import React from "react";
import MyLoader from "./Skeleton";
import AppContext from "../../context";
import { useNavigate } from "react-router-dom";
import { Wrap, Grid, Card, Image, Svg, Caption } from "./Categories.styled";
import { Container, H2, Text } from "../../globalStyles";

const Categories = () => {
  const { categories, categoriesIsLoaded, setActiveCategory } =
    React.useContext(AppContext);
  const navigate = useNavigate();

  const onCklickCategory = (id) => {
    setActiveCategory(id);
    navigate("/marketplace");
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Wrap>
        <H2>Browse Categories</H2>
        <Grid>
          {categoriesIsLoaded
            ? categories.map((category) => (
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
