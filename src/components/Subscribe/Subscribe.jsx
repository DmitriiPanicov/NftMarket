import React from "react";
import { ReactSVG } from "react-svg";
import { useForm } from "react-hook-form";

import Modal from "../ui/RegistrationModal/Modal";

import {
  Wrap,
  Image,
  SubscribeBlock,
  Header,
  SignUpForm,
  InputField,
  Input,
  ErrorMassage,
  Btn,
} from "./Subscribe.styled";
import { Container, H2, Text } from "../../globalStyles";
import SubscribeImage from "../../assets/img/astronaut.png";
import MailIcon from "../../assets/img/btnIcons/EnvelopeSimple.svg";

const Subscribe = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const onSubmit = () => {
    reset();
    setIsOpen(true);
  };

  return (
    <>
      <Container>
        <Wrap>
          <Image src={SubscribeImage} />
          <SubscribeBlock>
            <Header>
              <H2>Join Our Weekly Digest</H2>
              <Text>
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </Text>
            </Header>
            <SignUpForm onSubmit={(e) => e.preventDefault()}>
              <InputField>
                <Input
                  autoComplete="off"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "⚠ Must be completed",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 ||
                        "⚠ The email should have at most 50 characters",
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "⚠ Email address must be a valid address",
                    },
                  })}
                />
                {errors.email?.message && (
                  <ErrorMassage>{errors.email?.message}</ErrorMassage>
                )}
              </InputField>
              <Btn type="submit" onClick={handleSubmit(onSubmit)}>
                <ReactSVG src={MailIcon} />
                <span>Subscribe</span>
              </Btn>
            </SignUpForm>
          </SubscribeBlock>
        </Wrap>
      </Container>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
};

export default Subscribe;
