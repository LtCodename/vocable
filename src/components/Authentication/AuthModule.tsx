import React, { useState, useEffect } from "react";
import fire from "../../Firebase";
import { FlexColumn } from "../styled";
import { AuthButton, AuthInput } from "./styled";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const AuthModule: React.FC<any> = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [authorized, setAuthorized] = useState<boolean>(false);

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

  const handleAuth = (): void => {
    if (authorized) {
      fire
        .auth()
        .signOut()
        .then(() => {})
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      fire
        .auth()
        .signInWithEmailAndPassword(emailInputValue, passwordInputValue)
        .then(() => {})
        .catch((error) => {
          console.log(error.message);
        });
    }
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
      <AuthButton onClick={handleAuth}>
        {authorized ? "Logout" : "Login"}
      </AuthButton>
    </FlexColumn>
  );
};

export default AuthModule;
