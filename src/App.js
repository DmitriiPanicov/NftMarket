import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nft from "./pages/Nft/Nft";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Artist from "./pages/Artist/Artist";
import Ranking from "./pages/Ranking/Ranking";
import ConnectWallet from "./pages/Wallet/ConnectWallet";
import Marketplace from "./pages/Marketplace/Marketplace";

function App() {
  window.scrollTo(0, 0);
  return (
    <>
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
    </>
  );
}

export default App;
