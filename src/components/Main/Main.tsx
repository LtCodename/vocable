/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import AuthModule from "../Authentication/AuthModule";
import { FakeSpace, LogoutIcon, MainWrapper, UserInfoWrapper } from "./styled";
import React, { useState, useEffect } from "react";
import { User } from "../../redux/interfaces/interfaces";
import { FlexColumn, IconButton } from "../styled";
import fire from "../../Firebase";

const Main: React.FC<any> = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();

  const authData = useSelector((state: AppState) => state.authData);
  const users = useSelector((state: AppState) => state.users);

  useEffect(() => {
    if (users.users.length) {
      setAllUsers(users.users);
    }
  }, [users]);

  useEffect(() => {
    if (authData.authData) {
      if (authData.authData.uid.length) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    }
  }, [authData]);

  useEffect(() => {
    if (allUsers.length && authorized) {
      const foundUser = allUsers.find(
        (user: User) => user.uid === authData.authData.uid
      );
      setCurrentUser(foundUser);
    }
  }, [allUsers, authorized]);

  const handleLogout = (): void => {
    fire
      .auth()
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <MainWrapper height={"100vh"}>
      {authorized && currentUser ? (
        <UserInfoWrapper justifyContent={"space-between"} height={"100vh"}>
          <FakeSpace />
          <FlexColumn>
            <span>{`Hello ${currentUser?.username}!`}</span>
            <span>{`Welcome to Vocable.`}</span>
            <span>{`With my help you have already learned ${currentUser?.vocabulary.length} words.`}</span>
            <span>{`Ready to learn some more?`}</span>
          </FlexColumn>
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </UserInfoWrapper>
      ) : (
        <AuthModule />
      )}
    </MainWrapper>
  );
};

export default Main;
