import React from "react";

import {
  Wrap,
  Image,
  ConnectWalletBlock,
  Header,
  Wallets,
  Wallet,
  WalletIcon,
} from "./ConnectWallet.styled";
import BackgroundImage from "../../assets/img/wallet/image.png";
import { H1, Text } from "../../globalStyles";

function ConnectWallet() {
  const wallets = [
    {
      iconUrl: "/img/Metamask.png",
      title: "Metamask",
      globe_url: "https://metamask.io/",
    },
    {
      iconUrl: "/img/WalletConnect.png",
      title: "Wallet Connect",
      globe_url: "https://walletconnect.com/",
    },
    {
      iconUrl: "/img/Coinbase.png",
      title: "Coinbase",
      globe_url: "https://www.coinbase.com/",
    },
  ];

  return (
    <Wrap>
      <Image src={BackgroundImage} />
      <ConnectWalletBlock>
        <Header>
          <H1>Connect Wallet</H1>
          <Text>
            Choose a wallet you want to connect. There are several wallet
            providers.
          </Text>
        </Header>
        <Wallets>
          {wallets.map((item) => (
            <Wallet href={item.globe_url}>
              <WalletIcon src={item.iconUrl} />
              <Text>{item.title}</Text>
            </Wallet>
          ))}
        </Wallets>
      </ConnectWalletBlock>
    </Wrap>
  );
}

export default ConnectWallet;
