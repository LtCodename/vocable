import React, { useState, useEffect } from "react";
import fire from "../../Firebase";
import { FlexColumn } from "../styled";
import { AuthButton, AuthInput } from "./styled";

const AuthModule: React.FC<any> = () => {
  const [authButtonText, setAuthButtonText] = useState<string>("");
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");

  useEffect(() => {
    setAuthButtonText("Login");
  }, []);

  const handleAuth = (): void => {
    fire
      .auth()
      .signInWithEmailAndPassword(emailInputValue, passwordInputValue)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "email":
        setEmailInputValue(e.target.value);
        return;
      case "password":
        setPasswordInputValue(e.target.value);
        return;
      default:
        return;
    }
  };

  return (
    <FlexColumn>
      <span>AuthModule</span>
      <AuthInput
        value={emailInputValue}
        placeholder={"Enter Email"}
        onChange={handleChange}
        id={"email"}
      />
      <AuthInput
        value={passwordInputValue}
        placeholder={"Enter Password"}
        onChange={handleChange}
        id={"password"}
        type={"password"}
      />
      <AuthButton onClick={handleAuth}>{authButtonText}</AuthButton>
    </FlexColumn>
  );
};

export default AuthModule;
