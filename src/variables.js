export const COLORS = {
  purple: "rgba(162, 89, 255, 1)",
  white: "white",
  inherit: "inherit",
  grayLight: "#858584",
  grayMiddle: "#3B3B3B",
};

export const Button = `
display: flex;
column-gap: 13px;
padding: 14px 16px;
border: 1px solid rgba(162, 89, 255, 1);
border-radius: 20px;
align-items: center;
justify-content: center;
transition: 0.35s;
cursor: pointer;
&:hover {
  transform: scale(0.95);
}
@media screen and (max-width: 480px){
  column-gap: 7px;
}

span {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  @media screen and (max-width: 480px){
    font-size: 14px;
  }
}

svg,path{
  width: 26px;
  height: 26px;
  @media screen and (max-width: 480px){
    width: 16px;
    height: 16px;
  }
}
`;

export const HEADER_HEIGHT = `60px`