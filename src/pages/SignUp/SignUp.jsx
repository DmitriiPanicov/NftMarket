import React from "react";
import { useForm } from "react-hook-form";
import { ReactSVG } from "react-svg";

import Modal from "../../components/ui/RegistrationModal/Modal";

import { H1, Text } from "../../globalStyles";
import SignUpImg from "../../assets/img/SignUp.png";
import User from "../../assets/img/btnIcons/User.svg";
import Mail from "../../assets/img/btnIcons/EnvelopeSimple.svg";
import LockKey from "../../assets/img/btnIcons/LockKey.svg";
import {
  Wrap,
  Image,
  SignUpBlock,
  Header,
  SignUpForm,
  InputField,
  Input,
  ErrorMassage,
  Btn,
} from "./SignUp.styled";

function SignUp() {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ mode: "all" });

  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    reset();
    setIsOpen(true);
  };

  return (
    <>
      <Wrap>
        <Image src={SignUpImg} />
        <SignUpBlock>
          <Header>
            <H1>Create account</H1>
            <Text>
              Welcome! Enter Your Details And Start Creating, Collecting And
              Selling NFTs.
            </Text>
          </Header>
          <SignUpForm onSubmit={(e) => e.preventDefault()}>
            <InputField>
              <ReactSVG src={User} />
              <Input
                autoComplete="off"
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "⚠ Must be completed",
                  validate: {
                    minLength: (v) =>
                      v.length >= 5 || "⚠ Need more then 5 sumbols",
                    matchPattern: (v) =>
                      /^[a-zA-Z0-9_]+$/.test(v) ||
                      "⚠ Only letters, numbers and underscores",
                  },
                })}
              />
              {errors.username?.message && (
                <ErrorMassage>{errors.username.message}</ErrorMassage>
              )}
            </InputField>
            <InputField>
              <ReactSVG src={Mail} />
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
            <InputField>
              <ReactSVG src={LockKey} />
              <Input
                autoComplete="off"
                type="password"
                placeholder="Password"
                {...register("password", {
                  validate: {
                    maxLength: (v) =>
                      v.length >= 8 || "⚠ Need more then 8 sumbols",
                  },
                })}
              />
              {errors.password?.message && (
                <ErrorMassage>{errors.password?.message}</ErrorMassage>
              )}
            </InputField>
            <InputField>
              <ReactSVG src={LockKey} />
              <Input
                autoComplete="off"
                type="password"
                placeholder="Confirm Password"
                {...register("password_repeat", {
                  validate: {
                    repeat: (value) =>
                      value === password.current ||
                      "⚠ The passwords do not match",
                  },
                })}
              />
              {errors.password_repeat?.message && (
                <ErrorMassage>{errors.password_repeat?.message}</ErrorMassage>
              )}
            </InputField>
            <Btn type="submit" onClick={handleSubmit(onSubmit)}>
              <span>Create Account</span>
            </Btn>
          </SignUpForm>
        </SignUpBlock>
      </Wrap>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default SignUp;
