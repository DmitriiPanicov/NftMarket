import React from "react";

import { SearchForm, SearchSvg, CrossSvg } from "./SearchBlock.styled";
import searchSvg from "../../assets/img/btnIcons/MagnifyingGlass.svg";
import crossSvg from "../../assets/img/btnIcons/Cross.svg";

function SearchBlock({ value, setValue }) {
  const inputRef = React.useRef();
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onClickReset = () => {
    setValue("");
    inputRef.current.focus();
  };

  return (
    <SearchForm>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeValue(e)}
        type="text"
        placeholder="Search your favourite NFTs"
      />
      {value ? (
        <CrossSvg
          onClick={() => onClickReset()}
          src={crossSvg}
          alt="searchSvg"
        />
      ) : (
        ""
      )}
      <SearchSvg src={searchSvg} alt="searchSvg" />
    </SearchForm>
  );
}

export default SearchBlock;
