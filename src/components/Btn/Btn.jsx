import React from "react";
import { BtnStyle, SVG } from "./Btn.styled.js";

function Btn({ src, btnText, height, width, btnColor }) {
  return (
    <BtnStyle height={height} width={width} btnColor={btnColor}>
      {src ? <SVG src={src} btnColor={btnColor} /> : ""}
      <span>{btnText}</span>
    </BtnStyle>
  );
}

export default Btn;
