const useColumnsRender = (nftCards, columns) => {
  let res = new Array(columns).fill([]);

  for (let i = 0; i < nftCards.length; i += columns) {
    for (let j = 0; j < columns; j++) {
      if (nftCards[i + j] !== undefined) {
        res[j] = [...res[j], nftCards[i + j]];
      }
    }
  }

  return res;
};

export default useColumnsRender;
//получает массив [] и делит его на columns массивов [[],[],[],[]]