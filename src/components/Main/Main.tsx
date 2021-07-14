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
  MainPageMessage,
  RestrictedBackgoundMain,
  InfoIcon,
  VocabuaryIconWrapper,
  ReadyCounter,
} from "./styled";
import React, { useState, useEffect } from "react";
import { User, Word } from "../../redux/interfaces/interfaces";
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

  const calculateDone = (): number => {
    const filtered: Word[] = currentUser?.vocabulary.filter(
      (word: Word) => !word.new
    );
    return filtered.length;
  };

  const calculateReady = (): number => {
    const filtered: Word[] = currentUser?.vocabulary
      .filter((word: Word) => word.new)
      .filter((word: Word) => word.success === 5);
    return filtered.length;
  };

  const content =
    authorized && currentUser ? (
      <UserInfoWrapper justifyContent={"space-between"}>
        <FakeSpace />
        <FlexColumn>
          <FlexColumn>
            <MainPageMessage>{`Hello ${currentUser?.username}!`}</MainPageMessage>
            <MainPageMessage>{`Welcome to Vocable.`}</MainPageMessage>
            <MainPageMessage>{`With my help you have already learned ${calculateDone()} words.`}</MainPageMessage>
            <MainPageMessage>{`Ready to learn some more?`}</MainPageMessage>
          </FlexColumn>
          <FlexRow>
            <IconButton onClick={() => handleLink("/learn")}>
              <LearnIcon />
            </IconButton>
            <VocabuaryIconWrapper>
              <IconButton onClick={() => handleLink("/vocabulary")}>
                <VocabularyIcon />
              </IconButton>
              {calculateReady() > 0 ? (
                <ReadyCounter>{calculateReady()}</ReadyCounter>
              ) : null}
            </VocabuaryIconWrapper>
            <IconButton onClick={() => handleLink("/info")}>
              <InfoIcon />
            </IconButton>
          </FlexRow>
        </FlexColumn>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </UserInfoWrapper>
    ) : (
      <AuthModule />
    );

  return (
    <ContentBackground height={"100vh"} justifyContent={"center"}>
      <RestrictedBackgoundMain>{content}</RestrictedBackgoundMain>
    </ContentBackground>
  );
};

export default withRouter(Main);
