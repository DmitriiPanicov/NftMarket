import styled from "styled-components";
import { HEADER_HEIGHT } from "../../variables";

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  @media screen and (max-width: 834px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    margin-top: ${HEADER_HEIGHT};
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 50%;
  max-height: 700px;
  @media screen and (max-width: 834px) {
    height: 232px;
    width: 100%;
  }
`;
export const ConnectWalletBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    padding: 80px 40px;
  }
  @media screen and (max-width: 834px) {
    align-items: center;
    padding: 30px;
  }
`;
export const Header = styled.div`
  margin-bottom: 40px;
  max-width: 460px;
  @media screen and (max-width: 1279px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 834px) {
    text-align: center;
  }
`;
export const Wallets = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (max-width: 834px) {
    width: 60%;
  }
`;
export const Wallet = styled.a`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 40px;
  max-width: 320px;
  height: 72px;
  border: 1px solid rgba(162, 89, 255, 1);
  border-radius: 20px;
  background-color: rgba(59, 59, 59, 1);
  transition: 0.35s;

  &:hover {
    transform: scale(0.95);
  }
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    height: 60px;
  }
  @media screen and (max-width: 834px) {
    height: 60px;
    max-width: 100%;
  }
  @media screen and (max-width: 420px) {
    padding: 10px;
  }
`;

export const WalletIcon = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 1279px) {
    width: 32px;
    height: 32px;
  }
`;
