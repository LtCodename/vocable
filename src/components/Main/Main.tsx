/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import AuthModule from "../Authentication/AuthModule";
import { MainWrapper, UserInfoWrapper } from "./styled";
import React, { useState, useEffect } from "react";
import { User } from "../../redux/interfaces/interfaces";

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

  return (
    <MainWrapper height={"100vh"}>
      <AuthModule />
      {authorized && currentUser ? (
        <UserInfoWrapper>
          <span>{`Hello ${currentUser?.username}!`}</span>
          <span>{`Welcome to Vocable.`}</span>
          <span>{`With my help you have already learned ${currentUser?.vocabulary.length} words.`}</span>
          <span>{`Ready to learn some more?`}</span>
        </UserInfoWrapper>
      ) : null}
    </MainWrapper>
  );
};

export default Main;
