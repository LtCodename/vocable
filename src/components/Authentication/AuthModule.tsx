import React, { useState, useEffect } from "react";
import fire from "../../Firebase";
import { FlexRow, IconButton } from "../styled";
import { AuthInput, DemoIcon, LoginIcon, AuthColumn } from "./styled";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import MessageToast from "../MessageToast/MessageToast";

const AuthModule: React.FC<any> = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>("");
  const [showMessageToast, setShowMessageToast] = useState<boolean>(false);

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

  const handleMessage = (message: string): void => {
    setShowMessageToast(true);
    setMessageText(message);

    setTimeout(() => {
      setShowMessageToast(false);
      setMessageText("");
    }, 3000);
  };

  const handleAuth = (): void => {
    fire
      .auth()
      .signInWithEmailAndPassword(emailInputValue, passwordInputValue)
      .then(() => {})
      .catch((error) => {
        handleMessage(error.message);
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
    <AuthColumn>
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
      <FlexRow>
        <IconButton onClick={handleAuth}>
          <LoginIcon />
        </IconButton>
        <IconButton onClick={handleDemo}>
          <DemoIcon />
        </IconButton>
      </FlexRow>
      {showMessageToast ? <MessageToast messageText={messageText} /> : null}
    </AuthColumn>
  );
};

export default AuthModule;
