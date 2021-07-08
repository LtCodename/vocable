/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { AppState } from "../../redux/store";
import { BackIcon, ContentBackground, IconButton } from "../styled";
import { useSelector } from "react-redux";
import { User, Word } from "../../redux/interfaces/interfaces";
import { WordsTable, Tabs, Tab, TabName } from "./styled";
import WordItem from "./WordItem";
import fire from "../../Firebase";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/effects/Users";

const Vocabulary: React.FC<any> = ({ history }) => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  const [activeTab, setActiveTab] = useState<string>("new");

  const authData = useSelector((state: AppState) => state.authData);
  const users = useSelector((state: AppState) => state.users);

  const dispatch = useDispatch();

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

  const handleTab = (tabName: string): void => {
    setActiveTab(tabName);
  };

  const saveNextWord = (nextWord: Word): void => {
    const userVocabulary: Word[] = [
      ...currentUser?.vocabulary.filter(
        (word: Word) => word.id !== nextWord.id
      ),
    ];

    userVocabulary.push(nextWord);

    fire
      .firestore()
      .collection("users")
      .doc(currentUser?.id)
      .update({
        vocabulary: userVocabulary,
      })
      .then(() => {
        dispatch(getUsers());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const allWords = currentUser?.vocabulary
    .filter((word: Word) => !word.new)
    .map((word: Word) => {
      return (
        <WordItem
          word={word}
          key={word.id}
          save={(nextWord: Word) => saveNextWord(nextWord)}
        />
      );
    });

  const newWords = currentUser?.vocabulary
    .filter((word: Word) => word.new)
    .map((word: Word) => {
      return (
        <WordItem
          word={word}
          key={word.id}
          save={(nextWord: Word) => saveNextWord(nextWord)}
        />
      );
    });

  return (
    <ContentBackground height={"100vh"} justifyContent={"flex-start"}>
      <IconButton onClick={() => handleLink("/main")}>
        <BackIcon />
      </IconButton>
      <Tabs>
        <Tab onClick={() => handleTab("new")} active={activeTab === "new"}>
          <TabName>Learning</TabName>
        </Tab>
        <Tab onClick={() => handleTab("all")} active={activeTab === "all"}>
          <TabName>Vocabulary</TabName>
        </Tab>
      </Tabs>
      <WordsTable>{activeTab === "new" ? newWords : allWords}</WordsTable>
    </ContentBackground>
  );
};

export default withRouter(Vocabulary);
