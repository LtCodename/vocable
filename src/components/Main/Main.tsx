/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import AuthModule from "../Authentication/AuthModule";
import { withRouter } from "react-router-dom";
import {
  FakeSpace,
  LearnIcon,
  LogoutIcon,
  UserInfoWrapper,
  VocabularyIcon,
} from "./styled";
import React, { useState, useEffect } from "react";
import { User } from "../../redux/interfaces/interfaces";
import { ContentBackground, FlexColumn, FlexRow, IconButton } from "../styled";
import fire from "../../Firebase";

const Main: React.FC<any> = ({ history }) => {
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

  const handleLink = (page: string): void => {
    history.push(page);
  };

  return (
    <ContentBackground height={"100vh"}>
      {authorized && currentUser ? (
        <UserInfoWrapper justifyContent={"space-between"} height={"100vh"}>
          <FakeSpace />
          <FlexColumn>
            <FlexColumn>
              <span>{`Hello ${currentUser?.username}!`}</span>
              <span>{`Welcome to Vocable.`}</span>
              <span>{`With my help you have already learned ${currentUser?.vocabulary.length} words.`}</span>
              <span>{`Ready to learn some more?`}</span>
            </FlexColumn>
            <FlexRow>
              <IconButton onClick={() => handleLink("/learn")}>
                <LearnIcon />
              </IconButton>
              <IconButton onClick={() => handleLink("/vocabulary")}>
                <VocabularyIcon />
              </IconButton>
            </FlexRow>
          </FlexColumn>
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </UserInfoWrapper>
      ) : (
        <AuthModule />
      )}
    </ContentBackground>
  );
};

export default withRouter(Main);
