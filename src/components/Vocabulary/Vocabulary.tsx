/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { AppState } from "../../redux/store";
import { BackIcon, ContentBackground, Header, IconButton } from "../styled";
import { useSelector } from "react-redux";
import { User, Word } from "../../redux/interfaces/interfaces";
import { WordCell, WordsRow, WordsTable } from "./styled";

const Vocabulary: React.FC<any> = ({ history }) => {
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
        history.push("/main");
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

  const handleLink = (page: string): void => {
    history.push(page);
  };

  const processType = (type: number): string => {
    switch (type) {
      case 0:
        return "v.";
      case 1:
        return "n.";
      case 2:
        return "adj.";
      case 3:
        return "phr.";
      default:
        return "n/a";
    }
  };

  const words = currentUser?.vocabulary.map((word: Word) => {
    return (
      <WordsRow>
        <WordCell
          width={"30%"}
          justifyContent={"flex-start"}
          alingItems={"center"}
        >
          {word.name}
        </WordCell>
        <WordCell
          width={"10%"}
          justifyContent={"flex-start"}
          alingItems={"center"}
        >
          {processType(word.type)}
        </WordCell>
        <WordCell
          width={"60%"}
          justifyContent={"flex-start"}
          alingItems={"center"}
        >
          {word.translation}
        </WordCell>
      </WordsRow>
    );
  });

  return (
    <ContentBackground height={"100vh"} justifyContent={"flex-start"}>
      <IconButton onClick={() => handleLink("/main")}>
        <BackIcon />
      </IconButton>
      <Header>Vocabulary</Header>
      <WordsTable>{words}</WordsTable>
    </ContentBackground>
  );
};

export default withRouter(Vocabulary);
