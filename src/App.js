import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import React from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
import Marketplace from "./pages/Marketplace/Marketplace";
import Ranking from "./pages/Ranking/Ranking";
import ConnectWallet from "./pages/Wallet/ConnectWallet";
import SignUp from "./pages/SignUp/SignUp";
import Nft from "./pages/Nft/Nft";
import Artist from "./pages/Artist/Artist";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [nftCards, setNftCards] = React.useState([]);
  const [artists, setArtists] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [nftsIsLoaded, setNftsIsLoaded] = React.useState(false);
  const [artistsIsLoaded, setArtistsIsLoaded] = React.useState(false);
  const [categoriesIsLoaded, setCategoriesIsLoaded] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(2);

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://api.jsonbin.io/v3/b/64c43e4e9d312622a3880eb0")
        .then((res) => {
          setNftCards(res.data.record);
          setNftsIsLoaded(true);
        });
      await axios
        .get("https://api.jsonbin.io/v3/b/64c63e758e4aa6225ec7b173")
        .then((res) => {
          setArtists(res.data.record);
          setArtistsIsLoaded(true);
        });
      await axios
        .get("https://api.jsonbin.io/v3/b/64d115ffb89b1e2299ccde9c")
        .then((res) => {
          setCategories(res.data.record);
          setCategoriesIsLoaded(true);
        });
    }
    fetchData();

    window.scrollTo(0, 0);
  }, []);

  return (
    <AppContext.Provider
      value={{
        nftCards,
        setNftCards,
        nftsIsLoaded,
        artists,
        setArtists,
        artistsIsLoaded,
        categories,
        categoriesIsLoaded,
        activeCategory,
        setActiveCategory,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/wallet" element={<ConnectWallet />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/nft/:id" element={<Nft />} />
        <Route path="/artist/:id" element={<Artist />} />
      </Routes>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
