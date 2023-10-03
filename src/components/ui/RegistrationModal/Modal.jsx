import React from "react";
import { RiCloseLine } from "react-icons/ri";

import Some from "../../../assets/img/astronaut.png";

import {
  DarkBg,
  Modall,
  Centred,
  CloseBtn,
  Image,
  Header,
} from "./Modal.styled";
const Modal = ({ setIsOpen }) => {
  return (
    <>
      <Centred>
        <DarkBg onClick={() => setIsOpen(false)} />
        <Modall>
          <Image src={Some} />
          <Header>Thanks for registration!</Header>
          <CloseBtn onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </CloseBtn>
        </Modall>
      </Centred>
    </>
  );
};

export default Modal;
