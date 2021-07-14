import React, { useState, useEffect } from "react";
import fire from "../../Firebase";
import { FlexColumn, FlexRow, IconButton } from "../styled";
import { AuthInput, DemoIcon, LoginIcon, AuthErrorText } from "./styled";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const AuthModule: React.FC<any> = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const authData = useSelector((state: AppState) => state.authData);

  useEffect(() => {
    if (authData.authData) {
      if (authData.authData.uid.length) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    }
  }, [authData]);

  const clearError = (): void => {
    setError(false);
    setErrorText("");
  };

  const handleAuth = (): void => {
    clearError();

    fire
      .auth()
      .signInWithEmailAndPassword(emailInputValue, passwordInputValue)
      .then(() => {})
      .catch((error) => {
        setError(true);
        setErrorText(error.message);
        console.log(error.message);
      });
  };

  const handleDemo = (): void => {
    fire
      .auth()
      .signInWithEmailAndPassword("demo@gmail.com", "demouser1")
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearError();

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
      {authorized ? null : (
        <>
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
        </>
      )}
      {error ? <AuthErrorText>{errorText}</AuthErrorText> : null}
      <FlexRow>
        <IconButton onClick={handleAuth}>
          <LoginIcon />
        </IconButton>
        <IconButton onClick={handleDemo}>
          <DemoIcon />
        </IconButton>
      </FlexRow>
    </FlexColumn>
  );
};

export default AuthModule;
