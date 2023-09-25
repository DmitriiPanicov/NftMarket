import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={285}
    viewBox="0 0 240 285"
    backgroundColor="rgba(59, 59, 59, 1)"
    foregroundColor="rgba(43, 43, 43, 1)"
    {...props}
  >
    <rect x="0" y="0" rx="25" ry="25" width="240" height="285" />
  </ContentLoader>
);

export default MyLoader;
