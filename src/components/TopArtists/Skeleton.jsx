import React from "react";
import ContentLoader from "react-content-loader";
import { Rect } from "./Skeleton.styled";

const MyLoader = (props) => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    speed={2}
    backgroundColor="rgba(59, 59, 59, 1)"
    foregroundColor="rgba(43, 43, 43, 1)"
    {...props}
  >
    <Rect x="0" y="0" rx="25" ry="25" />
  </ContentLoader>
);

export default MyLoader;
